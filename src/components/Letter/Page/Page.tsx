import React from 'react';
import {
  letterCategoryIcon,
  letterCategoryName,
} from '../../../constants/letterCategoties';

import { LetterDto } from '../dto/letter.dto';
import { formatDate } from '../Item/formatDate';
import { Info } from './Info';

import s from './Page.module.scss';

type Props = {
  letter: LetterDto;
};

export const LetterPage = ({ letter }: Props) => {
  const { date, author, text, title, category, read, bookmark, count } = letter;

  return (
    <div className={s.letter}>
      <div className={s.title}>
        {title}
        {category && (
          <div className={s.category}>
            <img className={s.icon} src={letterCategoryIcon[category]} />
            {letterCategoryName[category]}
          </div>
        )}
      </div>
      <Info author={author} />
      <div className={s.text}>{text}</div>
    </div>
  );
};
