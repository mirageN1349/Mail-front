import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import { Loader } from '../UI/Loader/Loader';

import s from './InfinityList.module.scss';

type Props = PropsWithChildren<{
  pageStart: number;
  loadMore: (pageIndex: number) => void;
  isLoading: boolean;
}>;

export function InfinityList({ children, pageStart = 0, loadMore, isLoading }: Props) {
  const [pageIndex, setPage] = useState(pageStart);
  const loader = useRef(null);

  useEffect(() => {
    if (pageStart === 0) {
      setPage(pageStart);
    }
  }, [pageStart]);

  useEffect(() => {
    loadMore(pageIndex);
  }, [pageIndex]);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;

    if (target.isIntersecting) {
      setPage(page => page + 1);
    }
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);
  return (
    <>
      {children}
      <div className={s.loader} ref={loader}>
        {isLoading && <Loader />}
      </div>
    </>
  );
}
