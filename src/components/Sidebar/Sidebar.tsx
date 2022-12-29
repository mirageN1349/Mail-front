import React, { ReactNode } from 'react';

import { SidebarItem } from './Item/Item';

import AddIcon from './../../assets/icons/add.svg';

import { ThemeSwitcher } from './../ThemeSwitcher/ThemeSwitcher';

import s from './Sidebar.module.scss';

type Props = {
  openedFolder: string;
  onClickFolder: (folderTitle: string) => void;
  items: {
    icon: ReactNode;
    title: string;
    count: number;
  }[];
};

export const Sidebar = ({ openedFolder, onClickFolder, items }: Props) => {
  return (
    <aside className={s.sidebar}>
      <button className={s.writeMail}>Написать письмо</button>
      {items.map(item => (
        <SidebarItem
          key={item.title}
          count={item.count}
          isActive={item.title === openedFolder}
          icon={item.icon}
          title={item.title}
          onClick={() => onClickFolder(item.title)}
        />
      ))}
      <div className={s.divider}></div>
      <div className={s.addButton}>
        <img className={s.icon} src={AddIcon} />
        Новая папка
      </div>
      <ThemeSwitcher />
    </aside>
  );
};
