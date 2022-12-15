import React from 'react';

import s from './Item.module.scss';

type Props = {
  icon: string;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const SidebarItem = ({ icon, title, isActive, onClick }: Props) => {
  return (
    <div className={`${s.item} ${isActive ? s.active : ''}`} onClick={onClick}>
      <img className={s.icon} src={icon} />
      {title}
    </div>
  );
};
