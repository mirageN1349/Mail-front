import { LetterList } from './components/Letter/List/List';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { mockMails } from './constants/mails';
import { LetterDto } from './components/Letter/dto/letter.dto';

function App() {
  const formattedLetter: LetterDto[] = mockMails.map(mail => ({
    id: mail.id,
    author: mail.author,
    bookmark: mail.bookmark,
    date: mail.date,
    important: mail.important,
    read: mail.read,
    text: mail.text,
    title: mail.title,
    categories: mail.categories,
  }));

  return (
    <>
      <Header />
      <div className="page">
        <div className="container">
          <Sidebar />
          <div className="content">
            <LetterList letters={formattedLetter} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
