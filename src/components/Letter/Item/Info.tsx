import s from './Item.module.scss';

type Props = {
  title: SomeString;
  text: SomeString;
  date: Date;
  count?: number;
  formatDate: (date: Date) => DateString;
};

export function Info({ text, title, count, date, formatDate }: Props) {
  return (
    <div className={s.info}>
      {count && count > 1 && <div className={s.count}>{count}</div>}
      <div className={s.text}>
        <span className={s.title}>{title}</span>
        {text}
      </div>
      <div className={s.date}>{formatDate(date)}</div>
    </div>
  );
}
