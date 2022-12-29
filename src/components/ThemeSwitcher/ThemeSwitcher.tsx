import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/themeContext';

import PaletteIcon from './../../assets/icons/palette.svg';
import PaletteLightIcon from './../../assets/icons/palette-light.svg';

import s from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={s.switch} onClick={onClick}>
      <img className={s.icon} src={theme === 'light' ? PaletteIcon : PaletteLightIcon} alt="palette" />
      Тема: {theme === 'light' ? 'светлая' : 'тёмная'}
    </div>
  );
};
