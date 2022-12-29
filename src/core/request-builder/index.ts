const BACKEND_URL = `http://localhost:3000`;

// NOTE: Pattern. Builder
export default class RequestBuilder {
  url: URL;
  constructor(url = '') {
    this.url = new URL(url, BACKEND_URL);
  }

  toString() {
    return this.url.toString();
  }

  addPagination(start: number, end: number) {
    this.url.searchParams.set('start', start.toString());
    this.url.searchParams.set('end', end.toString());

    return this;
  }
}
