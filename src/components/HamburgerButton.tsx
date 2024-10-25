'use client';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';
import Link from 'next/link';

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-full tablet:hidden">
      <button
        className="h-full transition hover:text-onSecondary"
        onClick={(e) => {
          setIsOpen((prev) => !prev);
          e.stopPropagation();
        }}
      >
        {!isOpen ? (
          <MenuIcon className="h-12 w-12 pl-1 pr-2" />
        ) : (
          <MenuOpenIcon className="h-12 w-12 pl-1 pr-2" />
        )}
      </button>
      <nav
        className={`absolute right-0 z-10 flex h-[30dvh] w-dvw flex-col bg-background/80 text-20 leading-[24px] text-onBackground transition-all ${!isOpen ? 'left-full' : '-left-[calc(100dvw-100%)]'} `}
        // onClick={(e) => {
        //   setIsOpen((prev) => !prev);
        //   e.stopPropagation();
        // }}
      >
        <button className="text--shadow-1 h-1/4 transition hover:text-onSecondary">
          <Link href={'#header'}>기술</Link>
        </button>
        <button className="text--shadow-1 h-1/4 transition hover:text-onSecondary">
          <Link href="#develop">개발 경험</Link>
        </button>
        <button className="text--shadow-1 h-1/4 transition hover:text-onSecondary">
          <Link href="#research">연구 경험</Link>
        </button>
        <button className="text--shadow-1 h-1/4 transition hover:text-onSecondary">
          <Link href="#footer">학력/논문/연락처</Link>
        </button>
      </nav>
    </div>
  );
}
