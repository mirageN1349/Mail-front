import s from './Item.module.scss';

type Props = {
  title: SomeString;
  text: SomeString;
  date: Date;
  formatDate: (date: Date) => DateString;
};

export function Info({ text, title, date, formatDate }: Props) {
  return (
    <div className={s.info}>
      <div className={s.text}>
        <span className={s.title}>{title}</span>
        {text}
      </div>
      <div className={s.date}>{formatDate(date)}</div>
    </div>
  );
}
