import React from 'react';

import s from './Item.module.scss';

type Props = {
  icon: string;
  title: string;
  isActive?: boolean;
  count?: number;
  onClick?: () => void;
};

export const SidebarItem = ({ icon, title, count, isActive, onClick }: Props) => {
  return (
    <div className={`${s.item} ${isActive ? s.active : ''}`} onClick={onClick}>
      <div className={s.left}>
        <img className={s.icon} src={icon} />
        {title}
      </div>
      {count && <div className={s.count}>{count}</div>}
    </div>
  );
};
