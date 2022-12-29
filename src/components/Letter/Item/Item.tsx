import { useState, MouseEvent, useRef } from 'react';

import s from './Item.module.scss';
import { formatDate } from './formatDate';
import { LetterDto } from '../dto/letter.dto';

import Checkbox from './../../../assets/icons/checkbox.svg';
import BookmarkOutline from './../../../assets/icons/bookmark_outline.svg';
import BookmarkImg from './../../../assets/icons/bookmark.svg';
import ImportantIcon from './../../../assets/icons/error.svg';
import { getLetterCategoryIcon } from '../../../constants/letterCategories';
import { DocPreview } from './DocPreview';

type Props = {
  letter: LetterDto;
  isSelected?: boolean;
  type: 'center' | 'top' | 'bottom' | 'none';
  onClick: () => void;
  onClickSelect: (id: string) => void;
};

export function LetterItem({ letter, type, isSelected, onClick, onClickSelect }: Props) {
  const { id, date, author, text, doc, title, flag, read, important, bookmark, count } = letter;

  const [isMarked, setIsMarked] = useState(bookmark);

  const checkboxRef = useRef<HTMLDivElement | null>(null);
  const docIconRef = useRef<HTMLImageElement | null>(null);
  const bookmarkRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (
      bookmarkRef?.current?.contains(e.target as Node) ||
      checkboxRef?.current?.contains(e.target as Node) ||
      docIconRef?.current?.contains(e.target as Node)
    )
      return;
    onClick();
  };

  const [docPreview, setDocPreview] = useState(false);

  const onClickDoc = () => {
    setDocPreview(!docPreview);
  };

  const closeDoc = () => {
    setDocPreview(false);
  };

  return (
    <div
      className={`${s.mail} ${!read ? s.unread : ''} ${s[type]} ${isSelected ? s.selected : ''}`}
      onClick={handleClick}
    >
      <div className={s.dot} ref={bookmarkRef}></div>
      <div ref={checkboxRef} className={s.avatarWrapper}>
        {author.avatar ? <img className={s.avatar} src={author.avatar} /> : <div className={s.avatar}></div>}
        <input type="checkbox" id={id} checked={isSelected} onChange={() => onClickSelect(id)} />
        <label className={s.checkbox} htmlFor={id}>
          <img src={Checkbox} />
        </label>
      </div>
      <div className={s.content}>
        <div className={s.author}>
          {author.name} {author.surname}
        </div>
        <div
          ref={bookmarkRef}
          className={`${s.bookmark} ${isMarked ? s.marked : ''}`}
          onClick={() => setIsMarked(!isMarked)}
        >
          {!isMarked && important && <img className={s.importantIcon} src={ImportantIcon} alt="important" />}
          <img src={isMarked ? BookmarkImg : BookmarkOutline} alt="bookmark" />
        </div>
        <div className={s.info}>
          {count && count > 1 && <div className={s.count}>{count}</div>}
          <div className={s.text}>
            <span className={s.title}>{title}</span>
            {text}
          </div>

          <div className={s.categories}>
            {flag && <img className={s.icon} src={getLetterCategoryIcon(flag)} />}
            {doc && (
              <>
                <div className={s.docsIcon} ref={docIconRef} onClick={onClickDoc}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8282 4.58722C15.2661 3.02513 12.7334 3.02513 11.1713 4.58722L11.0822 4.67633C11.3664 4.84417 11.6343 5.05016 11.8785 5.29433C12.1226 5.53849 12.3286 5.80637 12.4965 6.09054L12.5856 6.00144C13.3666 5.22039 14.6329 5.22039 15.414 6.00144C16.195 6.78248 16.195 8.04881 15.414 8.82986L9.12156 15.1223C7.94999 16.2939 6.0505 16.2939 4.87892 15.1223C3.70735 13.9507 3.70735 12.0512 4.87892 10.8797L8.34296 7.41565C8.73349 7.02513 9.36665 7.02513 9.75717 7.41565C10.1477 7.80617 10.1477 8.43934 9.75717 8.82986L7.05054 11.5365C6.66002 11.927 6.66002 12.5602 7.05054 12.9507C7.44107 13.3412 8.07423 13.3412 8.46476 12.9507L11.1714 10.2441C12.343 9.0725 12.343 7.17301 11.1714 6.00144C9.99981 4.82986 8.10032 4.82986 6.92875 6.00144L3.46471 9.46544C1.51209 11.4181 1.51209 14.5839 3.46471 16.5365C5.41733 18.4891 8.58316 18.4891 10.5358 16.5365L16.8282 10.2441C18.3903 8.68198 18.3903 6.14932 16.8282 4.58722Z" />
                  </svg>
                </div>
                {doc && docIconRef.current && docPreview && (
                  <DocPreview doc={doc} onClose={closeDoc} docElement={docIconRef} />
                )}
              </>
            )}
          </div>
          <div className={s.date}>{formatDate(date)}</div>
        </div>
        <div className={s.divider}></div>
      </div>
    </div>
  );
}
