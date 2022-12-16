import { User } from '../../../@types/entities/User';

export type LetterCategory =
  | 'shop'
  | 'finances'
  | 'registration'
  | 'travel'
  | 'tickets'
  | 'taxes';

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
  categories?: LetterCategory[];
};
