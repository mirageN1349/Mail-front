import s from './Item.module.scss';

import { letterCategoryIcon } from '../../../constants/letterCategoties';
import { MailCategory } from '../../../@types/entities/Mail';

type Props = {
  title: SomeString;
  text: SomeString;
  date: DateString;
  categories?: MailCategory[];
  count?: number;
  formatDate: (date: DateString) => string;
};

export function Info({
  text,
  title,
  count,
  categories,
  date,
  formatDate,
}: Props) {
  return (
    <div className={s.info}>
      {count && count > 1 && <div className={s.count}>{count}</div>}
      <div className={s.text}>
        <span className={s.title}>{title}</span>
        {text}
      </div>
      <div className={s.categories}>
        {categories?.map((category, i) => (
          <img
            key={i}
            className={s.categoryIcon}
            src={letterCategoryIcon[category]}
          />
        ))}
      </div>
      <div className={s.date}>{formatDate(date)}</div>
    </div>
  );
}
