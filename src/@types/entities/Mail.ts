import { User } from './User';

export type MailCategory = 'Заказы' | 'Финансы' | 'Билеты' | 'Путешевствия' | 'Регистрации' | 'Штрафы и налоги';

export type Mail = {
  id: string;
  author: User;
  to: User[];
  title: string;
  text: string;
  bookmark: boolean;
  important: boolean;
  read: boolean;
  folder: string;
  date: DateString;
  flag?: MailCategory;
  doc?: {
    img?: ImageString;
  };
};
