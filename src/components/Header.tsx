import React from 'react';
import { CellType } from '../types';

interface HeaderProps {
  selected: CellType;
  onSelect: (type: CellType) => void;
}

const Header: React.FC<HeaderProps> = ({ selected, onSelect }) => {
  const baseBtn = 'tab';
  const active = 'tab-active';
  const inactive = 'tab-inactive';
  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-sm">
      <div className="mx-auto max-w-5xl px-4 py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
        <div className="mr-auto mb-2 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">celula.one</h1>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button className={`${baseBtn} ${selected==='procariota'?active:inactive}`} onClick={() => onSelect('procariota')}>Procariotă</button>
          <button className={`${baseBtn} ${selected==='animala'?active:inactive}`} onClick={() => onSelect('animala')}>Eucariotă Animală</button>
          <button className={`${baseBtn} ${selected==='vegetala'?active:inactive}`} onClick={() => onSelect('vegetala')}>Eucariotă Vegetală</button>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 pb-3 md:hidden flex items-center gap-2">
        <button className={`${baseBtn} ${selected==='procariota'?active:inactive}`} onClick={() => onSelect('procariota')}>Procariotă</button>
        <button className={`${baseBtn} ${selected==='animala'?active:inactive}`} onClick={() => onSelect('animala')}>Animală</button>
        <button className={`${baseBtn} ${selected==='vegetala'?active:inactive}`} onClick={() => onSelect('vegetala')}>Vegetală</button>
      </div>
    </header>
  );
};

export default Header;


