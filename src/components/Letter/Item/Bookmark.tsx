import s from './Item.module.scss';

import BookmarkOutline from './../../../assets/icons/bookmark_outline.svg';
import BookmarkImg from './../../../assets/icons/bookmark.svg';

type Props = {
  isMarked: boolean;
  onClick: () => void;
};

export function Bookmark({ isMarked, onClick }: Props) {
  return (
    <div className={`${s.bookmark} ${isMarked ? s.marked : ''}`} onClick={onClick}>
      {<img src={isMarked ? BookmarkImg : BookmarkOutline} alt="bookmark" />}
    </div>
  );
}
