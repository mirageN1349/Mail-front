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
    doc: {
      img: 'data:image/jpg;base64,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',
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
      img: 'data:image/jpg;base64,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',
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
      img: 'data:image/jpg;base64,/9j/4QDeRXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABwAAkAcABAAAADAyMTABkQcABAAAAAECAwCGkgcAFgAAAMAAAAAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAH0IAAADoAQAAQAAAKkFAAAAAAAAQVNDSUkAAABQaWNzdW0gSUQ6IDkwMP/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/CABEIBakIfQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/2gAMAwEAAhADEAAAAfLDPd4EMBDYIAEMATAQDYMQhoQNAANgCEMYhoAaATQCkDSYCGAhgIaAUgcSSEgYKcLUOxX5T2Ny6fi+1xuw7uXRyDlq2/NonKaipi1qNS4S55XguXZT67pqI3zynWI0UTrTLqbLViEyuIJMHDExEYyVKzVTaU65RHXTqzkwAJGmAAmAhS2YtDqdc67AURWQGFSahDQDATBAndTc3UNAhoABCYNIaRoGOpJopJimDaAUgIyTomSTMiCZbTBAMTBDE6G0NRTUMAAAAAAnCxkq5R0TBsbiCISjDAJYmAgEDTBsNEJpgmoZvwa8tOrCceL0akqdI6EoTx05eDu8Lt89yjPqwscZKq4tOUAAhy1KI16GeTX6HDXGcdsYVzi7QxtDBpNAhscSTSiWWp0Wa7Mrgm4uWuTx3gnomrouGOkm981TfZVhpmyPN1Y2zo00rNFOvC7rI0c2l8cuqiaK4ISonqrFGpkcyxdOOuWO+5swGXbLZpx2qpV1DN0KqJqcMlO/Pv08pNZxm+CGAhpgAADREY2hgJiAAAUkAMBJgIYCGAhoYmMQNCAYAAJgIGE3GcyEZorh2YZ6cmWuFxW5kru+j8D77xvWlJR8vrsrmgru48d57j5/EJ9avPdWFp876LwDrmUuHp4Z43QWSlO1ONW+iHksDWZwsrZU2SpE4y4qQEIzgLU4ydiQ5lXMDKrIKU0wASGmmFtYPXXNU642JqLGFSlGUmCAABDAlBhZXbW2mmITSYAITSNLJOkpQKBxBiFLABhKiYCMIBJJTogmkJggACQikk1LAAAAAALIWUKLLkaGDQmkEgBLExCAAnGdCTNEhpACkLKnnXfMuzh9KiGiDqc6L4dvm/S8bXDDOuzv4LBQbBpqI0AmpBALd6HyfqOjPPXZDu8+CcasBjiMBKU0Qnv3Ybcm7r24dHMs3VZ6ZYaYXNE23MpWWZaZlU9J3t38+1d+eM1sqrrFjrvp6cdezDqx1ndzJo08pz1jbq56zvZlMFTs0cPXpn1aMGANHOrO7j3GVKdMc7a2rJSrlZRLSdNVbSaUGThAqrxkQlJMTABSQIYCUgcW0CGAJgIBgMQhoAAAaBDG0ACGgFJDQ0AAA2BYR0RFJphKfT5Dz09Dk07+Lu80vU0uPKegXN0frtXlul5fd3HC3gMXmfWc7sfjsOvP9F5FXSxzcey8DrxeX6MItDiBMWaFox0ryaslKuUZ6QV2VDTTSsQAmII12RB6MmgG2gGh1CjTQpg0EsBMAYmmK6zPodQUlQgQowsrSBEgwQJg0NNXQnGnEBAIQmAhNBqnCRaFIbhNQ4KcRAnUkoyosFNHPAJlOuTIAAmCAYAmmIBAAAAAAEpJ2CapAACEgAhgAAmhAwcktENOgTSEBmwBGvp8Xs8vaEVl0q6qTTqj0ifL2RfoeYxToFJDgpIEpRSECD0Pnt9HZq6Wbv4cJdDXKsnJupW3TS6V3Q4e6F2iPF1URsqorK4bZyyW065zFBrTmpdTXsUw1bori6lhhz+jLUsnZ0iqfRhy70058G2Vkefp6+brUZedF6urxtN5285Q0ykQjpEoBQmA2CAcEyUZQGmTbTsIilXDdUnEdgyYQAA0AAAACGDEwEMBKSYDSAAAABSQIabAYJSQJSQCYOI0wGInfX0Mlls9DLj6+bX13jfm6fVZNsuV3uZrjbfu5UeLr18Hb53swpW/',
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
      img: 'data:image/jpg;base64,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',
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
