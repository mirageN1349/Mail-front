import React, { ReactNode } from 'react';

import s from './Item.module.scss';

type Props = {
  icon: ReactNode;
  title: string;
  isActive?: boolean;
  count?: number;
  onClick?: () => void;
};

export const SidebarItem = ({ icon, title, count, isActive, onClick }: Props) => {
  return (
    <div className={`${s.item} ${isActive ? s.active : ''}`} onClick={onClick}>
      <div className={s.left}>
        <div className={s.icon}>{icon}</div>
        {title}
      </div>
      {count && <div className={s.count}>{count}</div>}
    </div>
  );
};
