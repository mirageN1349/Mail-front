import React from 'react';

import s from './Page.module.scss';

type Props = {
  doc: {
    img?: ImageString;
  };
};

export const Media = ({ doc }: Props) => {
  const { img } = doc;
  return (
    <div className={s.media}>
      <div className={s.previews}>{img && <img className={s.image} src={img} />}</div>
      <div className={s.info}>
        3 файла{' '}
        <p className={s.download}>
          Скачать <span className={s.size}> (5Mb)</span>
        </p>
      </div>
    </div>
  );
};
