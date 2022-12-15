import React from 'react';

import s from './Header.module.scss';

import Logo from './../../assets/icons/logo.svg';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <img className={s.logo} src={Logo} alt="logo" />
      </div>
    </header>
  );
};
