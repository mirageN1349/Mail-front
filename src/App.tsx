import { LetterList } from './components/Letter/List/List';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';

const letters = [
  {
    id: '123',
    createdAt: new Date(),
    count: 1,
    author: {
      name: 'Михаил Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    content: {
      title: 'Что такое бебра?',
      text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    },
    isRead: true,
  },
  {
    id: '2',
    createdAt: new Date(),
    count: 5,
    author: {
      name: 'Михаил Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    content: {
      title: 'Что такое бебра?',
      text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    },
    isRead: true,
  },
  {
    id: '3',
    createdAt: new Date('02.01.2022 15:54'),
    count: 2,
    author: {
      name: 'Михаил Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    content: {
      title: 'Что такое бебра?',
      text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    },
    isRead: true,
  },
  {
    id: '4',
    createdAt: new Date('02.01.2020 15:54'),
    author: {
      name: 'Михаил Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    content: {
      title: 'Что такое бебра?',
      text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    },
    isRead: true,
  },
  {
    id: '5',
    createdAt: new Date(),
    author: {
      name: 'Михаил Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    content: {
      title: 'Что такое бебра?',
      text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    },
    isRead: true,
  },
  {
    id: '12345',
    createdAt: new Date(),
    author: {
      name: 'Иван Самарин',
    },
    content: {
      title: 'Резюме Frontend Developer (React)',
      text: 'Здравствуйте, высылаю свое резюме',
    },
    isRead: false,
  },
  {
    id: 'bebra',
    createdAt: new Date(),
    author: {
      name: 'Кирилл Золкин',
    },
    content: {
      title: 'У нас сломался бек',
      text: 'Почему??? Все Ваня виноват',
    },
    isRead: true,
  },
  {
    id: 'bebra1',
    count: 3,
    createdAt: new Date(),
    author: {
      name: 'Кирилл Золкин',
    },
    content: {
      title: 'У нас сломался бек',
      text: 'Почему??? Все Ваня виноват',
    },
    isRead: true,
  },
  {
    id: 'bebra2',
    createdAt: new Date(),
    author: {
      name: 'Кирилл Золкин',
    },
    content: {
      title: 'У нас сломался бек',
      text: 'Почему??? Все Ваня виноват',
    },
    isRead: true,
  },
];

function App() {
  return (
    <>
      <Header />
      <div className="page">
        <div className="container">
          <Sidebar />
          <div className="content">
            <LetterList letters={letters} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
