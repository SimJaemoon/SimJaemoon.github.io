'use client';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useEffect, useState } from 'react';
import { navItems } from '@/utility/data';
import Link from 'next/link';

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <div className="relative h-full pl-1 pr-2 tablet:hidden">
        <button
          className="h-full w-full tablet:transition tablet:hover:text-onSecondary"
          onClick={(e) => {
            setIsOpen((prev) => !prev);
            e.stopPropagation();
          }}
        >
          {!isOpen ? (
            <MenuIcon fontSize="large" />
          ) : (
            <MenuOpenIcon fontSize="large" />
          )}
        </button>
      </div>
      <nav
        className={`absolute top-full z-10 h-[30dvh] min-h-[55dvh] w-full overflow-hidden ${!isOpen ? 'invisible' : 'visible'}`}
      >
        <div
          className={`relative flex h-full w-full flex-col rounded-b-[12px] bg-onBackground/40 text-20 leading-[24px] text-onPrimary transition-all duration-300 ${!isOpen ? '-top-full' : 'top-0'}`}
        >
          {navItems.map((v, i) => (
            <button
              key={i}
              className={`text--shadow-1 h-1/4 w-full border-dashed border-background/25 tablet:transition tablet:hover:text-onSecondary ${i + 1 === navItems.length ? '' : 'border-b-[1px]'}`}
              onClick={(e) => {
                setIsOpen(false);
                e.stopPropagation();
              }}
            >
              <Link
                href={v.href}
                replace
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
