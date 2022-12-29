import http from 'node:http';
import fs from 'node:fs';
import * as crypto from 'node:crypto';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hostname = '127.0.0.1';
const port = 3000;
const protocol = 'http';

const MIME_TYPES = {
  default: 'application/octet-stream',
  json: 'application/json',
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript; charset=UTF-8',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
};

const STATIC_PATH = path.join(process.cwd(), './dist');

const dbCache = {
  mails: {
    needUpdate: true,
    data: [],
    take: null,
    skip: null,
    start: null,
    end: null,
  },
};

const partiallyObjectEquals = (obj1, obj2) => {
  for (let prop in obj2) {
    if (obj1.hasOwnProperty(prop) && obj2.hasOwnProperty(prop)) {
      if (obj2[prop] && typeof obj1[prop] == 'object' && typeof obj2[prop] == 'object') {
        if (!partiallyObjectEquals(obj1[prop], obj2[prop])) {
          return false;
        }
      } else if (obj1[prop] != obj2[prop]) {
        return false;
      }
    }
  }
  return true;
};

// db
const jsonDb = {
  async _connectToDb(dbFile) {
    try {
      const pathToData = path.join(__dirname, 'dist', dbFile);
      const data = dbCache.mails.needUpdate ? JSON.parse(await fs.promises.readFile(pathToData)) : dbCache.mails.data;
      const dataWithId = dbCache.mails.needUpdate ? data.map(it => ({ ...it, id: crypto.randomUUID() })) : data;
      dbCache.mails.needUpdate = false;
      return dataWithId;
    } catch (error) {
      throw new Error('Ошибка доступа к данным', error);
    }
  },

  async getMany({ take, skip, start, end }) {
    const dbData = await this._connectToDb('db.json');

    dbCache.mails.needUpdate = take !== dbCache.mails.take || skip !== dbCache.mails.skip ? true : false;

    if (take || skip) {
      dbCache.mails.skip = skip;
      dbCache.mails.take = take;

      const skippedData = dbData.slice(+skip || 0, dbData.length);
      const tookData = skippedData.slice(0, +take || skippedData.length);
      dbCache.mails.data = tookData;
      return tookData;
    }

    if (start || end) {
      dbCache.mails.start = start;
      dbCache.mails.end = end;

      const data = dbData.slice(+start, +end > dbData.length ? dbData.length : +end);
      dbCache.mails.data = data;
      return data;
    }

    dbCache.mails.data = data;

    return dbData || [];
  },

  async getUnique({ where }) {
    try {
      const data = await this._connectToDb('db.json');
      return data.find(it => partiallyObjectEquals(it, where));
    } catch (error) {
      throw new Error('Ошибка доступа к данным', error);
    }
  },
};

// controllers
const mailController = {
  async getAll(client) {
    const take = client.req.query?.take;
    const skip = client.req.query?.skip;

    const start = client.req.query?.start;
    const end = client.req.query?.end;

    const data = await jsonDb.getMany({ take, skip, start, end });

    return { status: 200, data };
  },
  async getOneByEmail(client, param) {
    const email = param;
    const data = await jsonDb.getUnique({ where: { author: { email } } });
    if (!data) {
      return { status: 404 };
    }
    return { status: 200, data };
  },
};

const mainController = {
  async getStaticFile(client) {
    const file = await prepareFile(client.req.url);
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    client.res.writeHead(statusCode, { 'Content-Type': mimeType });
    file.stream.pipe(client.res);
  },
};

// routing
const routing = {
  get: {
    '/': mainController.getStaticFile,
    '/assets/*': mainController.getStaticFile,
    '/mail': mailController.getAll,
    '/mail/*': mailController.getOneByEmail,
  },
  post: {},
};

const types = {
  object: JSON.stringify,
  string: s => s,
  undefined: () => 'not found',
  function: async (fn, param, client) => await fn(client, param?.[0]),
};

const getMatching = method => {
  const matching = [];
  for (const key in routing[method]) {
    if (key.includes('*')) {
      const rx = new RegExp(key.replace('*', '(.*)'));
      const route = routing[method][key];
      matching.push([rx, route]);
    }
  }
  return matching;
};

const router = async client => {
  console.info(`${client.req.method}:${client.req.url}`);

  const fullUrl = `${protocol}://${hostname}:${port}${client.req.url}`;
  const url = new URL(fullUrl);

  client.req['query'] = {};
  for (const [key, value] of url.searchParams.entries()) {
    client.req['query'][key] = value;
  }

  const method = client.req.method.toLowerCase();
  let param = [];
  let route = routing[method][client.req.url];
  if (!route) {
    const matching = getMatching(method);
    for (let i = 0; i < matching.length; i++) {
      const rx = matching[i];
      param = client.req.url.match(rx[0]);
      if (param) {
        param.shift();
        route = rx[1];
        break;
      }
    }
  }

  if (!route) {
    route = routing[method][url.pathname];
  }

  const type = typeof route;
  const renderer = types[type];
  return renderer(route, param, client);
};

const toBool = [() => true, () => false];

const prepareFile = async url => {
  const paths = [STATIC_PATH, url];
  if (url.endsWith('/')) paths.push('index.html');
  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : STATIC_PATH + '/404.html';
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  return { found, ext, stream };
};

const server = http.createServer(async (req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Max-Age': 2592000,
    'Access-Control-Allow-Headers': 'content-type',
  };
  try {
    const routerData = await router({ req, res });
    if (!routerData) return;
    if (typeof routerData === 'string') return res.end(routerData);

    headers['Content-Type'] = 'application/json';
    res.writeHead(routerData.status || 200, headers);
    res.end(JSON.stringify(routerData.data));
  } catch (error) {
    res.writeHead(500, headers);
    res.end({ statusCode: 500, message: error?.message });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
