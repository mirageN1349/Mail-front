import React, { useContext } from 'react';

import s from './Header.module.scss';

import { ThemeContext } from './../../contexts/themeContext';

import Logo from './../../assets/icons/logo.svg';
import LogoLight from './../../assets/icons/logo-light.svg';

import BackIcon from './../../assets/icons/back.svg';

type Props = {
  isLetterOpen: boolean;
  onClickBack: () => void;
};

export const Header = ({ isLetterOpen, onClickBack }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={s.header}>
      <div className={s.container}>
        {isLetterOpen ? (
          <button className={s.back} onClick={onClickBack}>
            <img className={s.icon} src={BackIcon} alt="back" /> Назад
          </button>
        ) : (
          <img className={s.logo} src={theme === 'light' ? Logo : LogoLight} alt="logo" />
        )}
      </div>
    </header>
  );
};
