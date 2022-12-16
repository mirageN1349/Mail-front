import { useState } from 'react';

import s from './Item.module.scss';
import { Avatar } from './Avatar';
import { Info } from './Info';
import { Bookmark } from './Bookmark';
import { formatDate } from './formatDate';
import { LetterDto } from '../dto/letter.dto';

type Props = {
  letter: LetterDto;
  isSelected?: boolean;
  type: 'center' | 'top' | 'bottom' | 'none';
  onClickSelect: (id: string) => void;
};

export function LetterItem({ letter, type, isSelected, onClickSelect }: Props) {
  const { id, date, author, text, title, categories, read, bookmark, count } =
    letter;

  const [isMarked, setIsMarked] = useState(bookmark);

  return (
    <div
      className={`${s.mail} ${!read ? s.unread : ''} ${s[type]} ${
        isSelected ? s.selected : ''
      }`}
    >
      <div className={s.dot}></div>
      <div className={s.avatarWrapper}>
        <Avatar
          onClick={() => onClickSelect(id)}
          isSelected={!!isSelected}
          avatarSrc={author.avatar}
          htmlFor={id}
        />
      </div>
      <div className={s.content}>
        <div className={s.author}>
          {author.name} {author.surname}
        </div>
        <Bookmark isMarked={isMarked} onClick={() => setIsMarked(!isMarked)} />
        <Info
          date={date}
          count={count}
          text={text}
          title={title}
          categories={categories}
          formatDate={formatDate}
        />
        <div className={s.divider}></div>
      </div>
    </div>
  );
}
