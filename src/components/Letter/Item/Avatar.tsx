import Checkbox from './../../../assets/icons/checkbox.svg';

import s from './Item.module.scss';

type Props = {
  onClick: () => void;
  htmlFor: string;
  avatarSrc?: string;
  isSelected: boolean;
};

export function Avatar({ onClick, avatarSrc, htmlFor, isSelected }: Props) {
  return (
    <>
      {avatarSrc ? <img className={s.avatar} src={avatarSrc} /> : <div className={s.avatar}></div>}
      <input type="checkbox" id={htmlFor} checked={isSelected} />
      <label className={s.checkbox} htmlFor={htmlFor} onClick={onClick}>
        <img src={Checkbox} />
      </label>
    </>
  );
}
