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
  const [isMarked, setIsMarked] = useState(false);

  const { id, createdAt, author, content, isRead, count } = letter;

  return (
    <div className={`${s.mail} ${!isRead ? s.unread : ''} ${s[type]} ${isSelected ? s.selected : ''}`}>
      <div className={s.dot}></div>
      <div className={s.avatarWrapper}>
        <Avatar onClick={() => onClickSelect(id)} isSelected={!!isSelected} avatarSrc={author.avatar} htmlFor={id} />
      </div>
      <div className={s.content}>
        <div className={s.author}>{author.name}</div>
        <Bookmark isMarked={isMarked} onClick={() => setIsMarked(!isMarked)} />
        <Info date={createdAt} count={count} text={content.text} title={content.title} formatDate={formatDate} />
        <div className={s.divider}></div>
      </div>
    </div>
  );
}
