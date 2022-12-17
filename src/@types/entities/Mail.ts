import { User } from './User';

export type MailCategory =
  | 'shop'
  | 'finances'
  | 'registration'
  | 'travel'
  | 'tickets'
  | 'taxes';

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
  category?: MailCategory;
  doc?: {
    img?: ImageString;
  };
};
