import { MailCategory } from '../../../@types/entities/Mail';
import { User } from '../../../@types/entities/User';

export type LetterDto = {
  id: string;
  date: DateString;
  count?: number;
  author: User;
  title: string;
  text: string;
  read: boolean;
  important: boolean;
  bookmark: boolean;
  flag?: MailCategory;
  to: User[];
  doc?: {
    img?: ImageString;
  };
};
