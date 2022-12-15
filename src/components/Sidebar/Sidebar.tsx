import React from 'react';

import { SidebarItem } from './Item/Item';

import AddIcon from './../../assets/icons/add.svg';
import MailIcon from './../../assets/icons/mail.svg';
import TrashIcon from './../../assets/icons/trash.svg';
import SendedIcon from './../../assets/icons/sended.svg';
import ImportantIcon from './../../assets/icons/important.svg';

import s from './Sidebar.module.scss';

type Props = {};

const items = [
  {
    icon: MailIcon,
    title: 'Входящие',
    isActive: true,
    count: 12
  },
  {
    icon: ImportantIcon,
    title: 'Важное',
    count: 5,
  },
  {
    icon: SendedIcon,
    title: 'Отправленне',
  },
  {
    icon: TrashIcon,
    title: 'Корзина',
  },
];

export const Sidebar = (props: Props) => {
  return (
    <aside className={s.sidebar}>
      <button className={s.writeMail}>
        Написать письмо
      </button>
      {items.map(item => (
        <SidebarItem key={item.title} count={item.count} isActive={item.isActive} icon={item.icon} title={item.title} />
      ))}
      <div className={s.divider}></div>
      <div className={s.addButton}>
        <img className={s.icon} src={AddIcon} />
        Новая папка
      </div>
    </aside>
  );
};
