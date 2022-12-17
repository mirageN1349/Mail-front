import s from './Item.module.scss';

import { letterCategoryIcon } from '../../../constants/letterCategoties';
import AttachIcon from './../../../assets/icons/attach.svg';
import { MailCategory } from '../../../@types/entities/Mail';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { DocPreview } from './DocPreview';
import { createPortal } from 'react-dom';

type Props = {
  title: SomeString;
  text: SomeString;
  date: DateString;
  category?: MailCategory;
  count?: number;
  doc?: {
    img?: ImageString;
  };
  formatDate: (date: DateString) => string;
};

export function Info({
  text,
  title,
  count,
  category,
  date,
  doc,
  formatDate,
}: Props) {
  const [docPreview, setDocPreview] = useState(false);

  const docIconRef = useRef<HTMLImageElement | null>(null);

  // useOnClickOutside();

  const onClickDoc = () => {
    setDocPreview(!docPreview);
  };

  const closeDoc = () => {
    setDocPreview(false);
  };

  return (
    <div className={s.info}>
      {count && count > 1 && <div className={s.count}>{count}</div>}
      <div className={s.text}>
        <span className={s.title}>{title}</span>
        {text}
      </div>

      <div className={s.categories}>
        {category && (
          <img className={s.icon} src={letterCategoryIcon[category]} />
        )}
        {doc && (
          <>
            <img
              className={s.docsIcon}
              ref={docIconRef}
              src={AttachIcon}
              onClick={onClickDoc}
            />
            {doc && docIconRef.current && docPreview && (
              <DocPreview
                doc={doc}
                onClose={closeDoc}
                docElement={docIconRef}
              />
            )}
          </>
        )}
      </div>
      <div className={s.date}>{formatDate(date)}</div>
    </div>
  );
}
