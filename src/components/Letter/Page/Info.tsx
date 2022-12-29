import React from 'react';
import { User } from '../../../@types/entities/User';
import { dateFormatter } from './../../../utils/dateFormatter';

import { getVisibleConsumersString, getHiddenConsumersString } from './consumersHelper';

import s from './Page.module.scss';

type Props = {
  author: User;
  to: User[];
  date: Date;
};

export const Info = ({ author, to, date }: Props) => {
  const isToday = dateFormatter.isToday(date);
  const fullDate = isToday ? 'Сегодня' : dateFormatter.toFullDateString(date);
  const time = dateFormatter.toTimeString(date);

  const visibleConsumersString = getVisibleConsumersString(to);
  const hiddenConsumersString = getHiddenConsumersString(to);

  return (
    <div className={s.info}>
      <div className={s.avatarWrapper}>
        {author.avatar ? <img className={s.avatar} src={author.avatar} /> : <div className={s.avatar}></div>}
      </div>
      <div className={s.mailInfo}>
        <div className={s.top}>
          <div className={s.author}>
            {author.name} {author.surname}
          </div>
          <div className={s.date}>
            {fullDate}, {time}
          </div>
        </div>
        <div className={s.bottom}>
          Кому: {visibleConsumersString}{' '}
          {hiddenConsumersString && <span className={s.hidden}>{hiddenConsumersString}</span>}
        </div>
      </div>
    </div>
  );
};
