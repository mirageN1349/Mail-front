import s from './Loader.module.scss';

export function Loader() {
  return (
    <div className={s.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
