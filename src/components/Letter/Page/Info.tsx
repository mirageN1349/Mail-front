import React from 'react';
import { User } from '../../../@types/entities/User';

import s from './Page.module.scss';

type Props = {
  author: User;
};

export const Info = ({ author }: Props) => {
  return (
    <div className={s.info}>
      <div className={s.avatarWrapper}>
        {author.avatar ? (
          <img className={s.avatar} src={author.avatar} />
        ) : (
          <div className={s.avatar}></div>
        )}
      </div>
      <div className={s.mailInfo}>
        <div className={s.top}>
          <div className={s.author}>
            {author.name} {author.surname}
          </div>
        </div>
        <div className={s.bottom}></div>
      </div>
    </div>
  );
};
