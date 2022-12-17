import { Mail } from '../@types/entities/Mail';

export const mockMails: Mail[] = [
  {
    id: '1',
    author: {
      name: 'Матанат',
      surname: 'Гаджикеримова',
      email: 'two-waysandstone@mail.ru',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Первоначальный дуализм иллюзорен.',
    text: 'Диалектика индуцирует патристику. Имманентный предикат абстрактен. Интеллигибельная актуализация структуальна. Парадигма генетивна. Материализм контролирует космизм. Как ни странно, но необычайная парадигма, возводя, предполагает подтекст. Антагонизм иллюзорен. Актуализация упирается в народничество. Либидо примитивно. Органичная апперцепция, абстрагируясь, выводит дуализм. Откровенно сказать обскурантизм вполне возможен. Благо рефлектирует и заполняет апперцепцию — известный факт.',
    bookmark: false,
    important: false,
    read: false,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
    category: 'tickets',
    doc: {
      img: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
  },
  {
    id: '2',
    author: {
      name: 'Михаил',
      surname: 'Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'baruli.ma@gmail.com',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Что такое бебра?',
    text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    bookmark: false,
    important: false,
    read: false,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
  },
  {
    id: '3',
    author: {
      name: 'Михаил',
      surname: 'Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'baruli.ma@gmail.com',
    },
    category: 'registration',
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Что такое бебра?',
    text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    bookmark: false,
    important: false,
    read: true,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
  },
  {
    id: '4',
    author: {
      name: 'Иван',
      surname: 'Самарин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'baruli.ma@gmail.com',
    },
    to: [
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Галон говна',
    text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    bookmark: false,
    important: false,
    read: true,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
  },
  {
    id: '5',
    author: {
      name: 'Михаил',
      surname: 'Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'baruli.ma@gmail.com',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Что такое бебра?',
    text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    bookmark: true,
    important: false,
    read: true,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
  },
  {
    id: '6',
    author: {
      name: 'Матанат',
      surname: 'Гаджикеримова',
      email: 'two-waysandstone@mail.ru',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Первоначальный дуализм иллюзорен.',
    text: 'Диалектика индуцирует патристику. Имманентный предикат абстрактен. Интеллигибельная актуализация структуальна. Парадигма генетивна. Материализм контролирует космизм. Как ни странно, но необычайная парадигма, возводя, предполагает подтекст. Антагонизм иллюзорен. Актуализация упирается в народничество. Либидо примитивно. Органичная апперцепция, абстрагируясь, выводит дуализм. Откровенно сказать обскурантизм вполне возможен. Благо рефлектирует и заполняет апперцепцию — известный факт.',
    bookmark: false,
    important: false,
    read: false,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
    doc: {
      img: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
  },
  {
    id: '7',
    author: {
      name: 'Михаил',
      surname: 'Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'baruli.ma@gmail.com',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Что такое бебра?',
    text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    bookmark: false,
    important: false,
    read: true,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
  },
  {
    id: '8',
    author: {
      name: 'Михаил',
      surname: 'Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'baruli.ma@gmail.com',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    category: 'finances',
    title: 'Что такое бебра?',
    text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    bookmark: true,
    important: false,
    read: true,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
  },
  {
    id: '9',
    author: {
      name: 'Матанат',
      surname: 'Гаджикеримова',
      email: 'two-waysandstone@mail.ru',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Первоначальный дуализм иллюзорен.',
    text: 'Диалектика индуцирует патристику. Имманентный предикат абстрактен. Интеллигибельная актуализация структуальна. Парадигма генетивна. Материализм контролирует космизм. Как ни странно, но необычайная парадигма, возводя, предполагает подтекст. Антагонизм иллюзорен. Актуализация упирается в народничество. Либидо примитивно. Органичная апперцепция, абстрагируясь, выводит дуализм. Откровенно сказать обскурантизм вполне возможен. Благо рефлектирует и заполняет апперцепцию — известный факт.',
    bookmark: false,
    important: false,
    read: false,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
    doc: {
      img: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
  },
  {
    id: '10',
    author: {
      name: 'Алексей',
      surname: 'Крайнов',
      avatar:
        'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80',
      email: 'no-nonsensesnap@mail.ru',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    category: 'tickets',
    title: 'Что такое бебра?',
    text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    bookmark: false,
    important: false,
    read: true,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
  },
  {
    id: '11',
    author: {
      name: 'Матанат',
      surname: 'Гаджикеримова',
      email: 'two-waysandstone@mail.ru',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Первоначальный дуализм иллюзорен.',
    text: 'Диалектика индуцирует патристику. Имманентный предикат абстрактен. Интеллигибельная актуализация структуальна. Парадигма генетивна. Материализм контролирует космизм. Как ни странно, но необычайная парадигма, возводя, предполагает подтекст. Антагонизм иллюзорен. Актуализация упирается в народничество. Либидо примитивно. Органичная апперцепция, абстрагируясь, выводит дуализм. Откровенно сказать обскурантизм вполне возможен. Благо рефлектирует и заполняет апперцепцию — известный факт.',
    bookmark: false,
    important: false,
    read: false,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
    doc: {
      img: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
  },
  {
    id: '12',
    author: {
      name: 'Михаил',
      surname: 'Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'baruli.ma@gmail.com',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Что такое бебра?',
    text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    bookmark: false,
    important: false,
    read: false,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
  },
  {
    id: '13',
    author: {
      name: 'Михаил',
      surname: 'Бебрулин',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'baruli.ma@gmail.com',
    },
    to: [
      {
        name: 'Дирдь',
        surname: 'Ладухина',
        email: 'no-nonsensesnap@mail.ru',
        avatar:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAClklEQVR4nO3dzU4TURyG8XdKW2pJka8iBhSDRhdAZOPHDYi35W15CaKRBRsxKk00lFigxKKFts64MDaOQUlKaZ9j3t9uJqfJP/PMyeluouT5s0SGkRn2AJbmIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDAOAuMgMA4C4yAwDgLjIDDZYQ/QD0kcq9Vsqn16onyhoFyhqCgTDXusngQR5Givqo9bW5KkK+PjuvPosSSpXt1V9c22Dnc/KYnj7vpsflRT8/NaWF7W2OTUUGbuVRBBWs1vOtqrSpI67ZaSONb7lxuqvt0+c32ndarPOx9Uq1S0uLamGyurgxz3QoI8Q95tvEjFGMnmVCiVlM3nU+uSJFZl87VqlZ1Bj9izIHbI777W6zo+OJAkTczN6eb9NY2Xy4qin+9WY39fH15t6Eut1v1NZXNT5cVbUsQ/V4LbIb/Oiut372n1ybquzl7rxpCk0syMVtefamxisnvv5Lih4/rhwGftRXBBJGm0WNTtBw8lnf3GZzIjWlhZTt1rNhoDmOziggwyu7SkKPPv0UvT5dT191b7MkfqmyCDlKZnzl2THU0f8J1267LG6asgg+SLxXPXjORyqeu407mscfoqyCB/PuyzRH85X+iCDBIF8Pe1V0EG+Z85CIyDwDgIjIPAOAiMg8A4CIyDwDgITORPHrF4h8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CIyDwDgIjIPAOAiMg8A4CMwPh3d0ABNc5tkAAAAASUVORK5CYII=',
      },
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Что такое бебра?',
    text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    bookmark: false,
    important: false,
    read: true,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
  },
  {
    id: '14',
    author: {
      name: 'Иван',
      surname: 'Самарин',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'baruli.ma@gmail.com',
    },
    to: [
      {
        name: 'Балбика',
        surname: 'Макейченкова',
        email: 'alternativeexpulsion@mail.ru',
      },
    ],
    title: 'Галон говна',
    text: 'Все задаются вопросом про бебру. Но что же это на самом деле? Вы узнаете перейдя по ссылке ниже',
    bookmark: false,
    important: false,
    read: true,
    folder: 'Архив',
    date: '2021-11-29T11:54:50.502Z',
  },
];
