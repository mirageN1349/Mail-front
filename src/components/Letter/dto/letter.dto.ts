export type LetterDto = {
  id: string;
  createdAt: Date;
  count?: number;
  author: {
    name: string;
    avatar?: string;
  };
  content: {
    title: string;
    text: string;
  };
  isRead?: boolean;
  isMarked?: boolean;
};
