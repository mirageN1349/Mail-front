import React, { useState } from 'react';
import { LetterDto } from '../dto/letter.dto';
import { LetterItem } from './../Item/Item';

import s from './List.module.scss';

type Props = {
  letters: LetterDto[];
  onClickLetter: (id: string) => void;
};

export function LetterList({ letters, onClickLetter }: Props) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    const selectedIndex = selectedIds.findIndex(selectedId => selectedId === id);
    if (selectedIndex === -1) {
      return setSelectedIds(prevState => [...prevState, id]);
    }
    setSelectedIds(prevState => {
      const arr = [...prevState];
      arr.splice(selectedIndex, 1);
      return arr;
    });
  };

  const isSelected = (id: string) => {
    return !!selectedIds.find(selectedId => selectedId === id);
  };

  const getSelectedType = (i: number) => {
    const prev = letters.at(i - 1);
    const next = letters.at(i + 1);

    if (prev && isSelected(prev.id)) {
      if (next && isSelected(next.id)) {
        return 'center';
      } else {
        return 'bottom';
      }
    } else {
      if (next && isSelected(next.id)) {
        return 'top';
      }
      return 'none';
    }
  };

  return (
    <div className={s.letterList}>
      {letters.map((letter, i) => (
        <LetterItem
          key={letter.id}
          type={getSelectedType(i)}
          letter={letter}
          isSelected={isSelected(letter.id)}
          onClickSelect={toggleSelect}
          onClick={() => onClickLetter(letter.id)}
        />
      ))}
    </div>
  );
}
