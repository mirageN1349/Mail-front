import React from 'react';
import { getLetterCategoryIcon } from '../../../constants/letterCategories';

import { LetterDto } from '../dto/letter.dto';
import { formatDate } from '../Item/formatDate';
import { Info } from './Info';
import { Media } from './Media';

import s from './Page.module.scss';

type Props = {
  letter: LetterDto;
};

export const LetterPage = ({ letter }: Props) => {
  const { date, author, text, title, to, flag, read, bookmark, count, doc } = letter;

  return (
    <div className={s.letter}>
      <div className={s.title}>
        {title}
        {flag && (
          <div className={s.category}>
            <img className={s.icon} src={getLetterCategoryIcon(flag)} />
            {flag}
          </div>
        )}
      </div>
      <Info author={author} to={to} date={new Date(date)} />
      {doc && <Media doc={doc} />}
      <div className={s.text}>{text}</div>
    </div>
  );
};
