import React, { MutableRefObject, ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

import s from './Item.module.scss';

type Props = {
  doc: {
    img?: ImageString;
  };
  ref?: any;
  docElement: MutableRefObject<HTMLImageElement | null>;
  onClose: () => void;
};

export const DocPreview = ({ doc, ref, docElement, onClose }: Props) => {
  const { img } = doc;
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
  });

  const modalRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(modalRef, onClose, docElement);

  useEffect(() => {
    if (!docElement.current || !modalRef.current) return;

    const { top, left, height: docHeight } = docElement.current.getBoundingClientRect();
    const { height: modalHeight } = modalRef.current.getBoundingClientRect();

    setModalPosition({
      top: top + docHeight / 2 - modalHeight / 2,
      left,
    });
  }, [docElement]);

  return createPortal(
    <div
      ref={modalRef}
      className={s.docPreview}
      style={{
        top: `${modalPosition.top}px`,
        left: `${modalPosition.left}px`,
      }}
    >
      <div className={s.doc}>
        <div className={s.fullImage}>
          <img src={img} />
        </div>
        <div className={s.image}>
          <img src={img} />
        </div>
        Какой-то текст 1.26 MB
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};
