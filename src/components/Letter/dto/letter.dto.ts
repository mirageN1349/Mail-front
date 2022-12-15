export type LetterDto = {
  id: string;
  createdAt: Date;
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
