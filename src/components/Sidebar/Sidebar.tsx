import React from 'react';

import { SidebarItem } from './Item/Item';

import AddIcon from './../../assets/icons/add.svg';
import MailIcon from './../../assets/icons/mail.svg';
import SendedIcon from './../../assets/icons/sended.svg';
import ImportantIcon from './../../assets/icons/important.svg';

import s from './Sidebar.module.scss';

type Props = {};

const items = [
  {
    icon: MailIcon,
    title: 'Входящие',
    isActive: true,
  },
  {
    icon: ImportantIcon,
    title: 'Важное',
  },
  {
    icon: SendedIcon,
    title: 'Отправленне',
  },
  {
    icon: MailIcon,
    title: 'Корзина',
  },
];

export const Sidebar = (props: Props) => {
  return (
    <aside className={s.sidebar}>
      {items.map((item, i) => (
        <SidebarItem key={i} icon={item.icon} title={item.title} />
      ))}
      <div className={s.divider}></div>
      <div className={s.addButton}>
        <img className={s.icon} src={AddIcon} />
        Новая папка
      </div>
    </aside>
  );
};
