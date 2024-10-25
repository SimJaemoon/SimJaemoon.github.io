'use client';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useEffect, useState } from 'react';
import { navItems } from '@/utility/data';
import Link from 'next/link';

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsOpen(false);
    });
  });

  return (
    <>
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
      </div>
      <nav
        className={`absolute top-full z-10 h-[30dvh] w-full overflow-hidden ${!isOpen ? 'invisible' : 'visible'}`}
      >
        <div
          className={`relative flex h-full w-full flex-col rounded-b-[12px] bg-onBackground/40 text-20 leading-[24px] text-onPrimary transition-all ${!isOpen ? '-top-full' : 'top-0'}`}
        >
          {navItems.map((v, i) => (
            <button
              key={i}
              className={`text--shadow-1 h-1/4 w-full border-dashed border-background/25 transition hover:text-onSecondary ${i + 1 === navItems.length ? '' : 'border-b-[1px]'}`}
              onClick={(e) => {
                setIsOpen(false);
                e.stopPropagation();
              }}
            >
              <Link
                href={v.href}
                className="flex h-full w-full items-center justify-center"
              >
                {v.name}
              </Link>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
