import { LetterList } from './components/Letter/List/List';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { LetterDto } from './components/Letter/dto/letter.dto';
import { useCallback, useMemo, useRef, useState } from 'react';
import { LetterPage } from './components/Letter/Page/Page';
import httpRequest from './core/request';
import { InfinityList } from './components/InfinityList/InfinityList';

import RequestBuilder from './core/request-builder';
import { SidebarSvg } from './components/Sidebar/SidebarSvgSelector';

const START_MAIL_COUNT = 15;

function App() {
  const [openedLetterId, setOpenedLetterId] = useState<string | null>(null);
  const [openedFolder, setOpenedFolder] = useState<string>('Входящие');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState(0);

  const urlRef = useRef(new RequestBuilder('mail'));

  const [mails, setMails] = useState<LetterDto[]>([]);

  const handleFolderClick = (folder: string) => {
    setOpenedFolder(folder);
  };

  const setPagination = useCallback((pageIndex: number) => {
    const start = pageIndex * START_MAIL_COUNT;
    const end = start + START_MAIL_COUNT;

    urlRef.current.addPagination(start, end);
    setPage(pageIndex);
  }, []);

  const loadData = useCallback(
    async (url: RequestBuilder) => {
      try {
        setIsLoading(true);

        const data = await httpRequest.get<LetterDto[]>(url.url.toString());

        setMails([...mails, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [mails]
  );

  const loadMore = (pageIndex: number) => {
    setPagination(pageIndex);

    if (isLoading === false) {
      loadData(urlRef.current);
    }
  };

  const getMailById = (id: string) => {
    return mails.find(mail => mail.id === id);
  };

  const formattedLetter: LetterDto[] = mails.map(mail => ({
    id: mail.id,
    author: mail.author,
    bookmark: mail.bookmark,
    date: mail.date,
    important: mail.important,
    read: mail.read,
    text: mail.text,
    title: mail.title,
    flag: mail.flag,
    doc: mail.doc,
    to: mail.to,
  }));

  const handleClickLetter = (id: string) => {
    setOpenedLetterId(id);
  };

  const handleCloseLetter = () => {
    setOpenedLetterId(null);
  };

  const openedMail = openedLetterId ? getMailById(openedLetterId) : null;

  const items = [
    {
      icon: SidebarSvg.mail,
      title: 'Входящие',
      count: mails.length,
    },
    {
      icon: SidebarSvg.important,
      title: 'Важное',
      count: 5,
    },
    {
      icon: SidebarSvg.sended,
      title: 'Отправленные',
      count: 5,
    },
    {
      icon: SidebarSvg.trash,
      title: 'Корзина',
      count: 5,
    },
  ];

  return (
    <>
      <Header isLetterOpen={!!openedLetterId} onClickBack={handleCloseLetter} />
      <div className="page">
        <div className="container">
          <Sidebar items={items} openedFolder={openedFolder} onClickFolder={handleFolderClick} />
          <div className="content">
            {!isLoading && isError && <p className="errorText">Произошла ошибка</p>}
            {openedMail ? (
              <LetterPage letter={openedMail} />
            ) : (
              <InfinityList isLoading={isLoading} pageStart={page} loadMore={loadMore}>
                <LetterList letters={formattedLetter} onClickLetter={handleClickLetter} />
              </InfinityList>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
