import { LetterList } from './components/Letter/List/List';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { mockMails } from './constants/mails';
import { LetterDto } from './components/Letter/dto/letter.dto';
import { useState } from 'react';
import { LetterPage } from './components/Letter/Page/Page';

function App() {
  const [openedLetterId, setOpenedLetterId] = useState<null | string>(null);
  const formattedLetter: LetterDto[] = mockMails.map(mail => ({
    id: mail.id,
    author: mail.author,
    bookmark: mail.bookmark,
    date: mail.date,
    important: mail.important,
    read: mail.read,
    text: mail.text,
    title: mail.title,
    category: mail.category,
    doc: mail.doc,
  }));

  return (
    <>
      <Header />
      <div className="page">
        <div className="container">
          <Sidebar />
          <div className="content">
            {openedLetterId ? (
              <LetterPage letter={mockMails[7]} />
            ) : (
              <LetterList letters={formattedLetter} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
