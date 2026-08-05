'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}
interface MobileNavToggleProps {
  links: NavLink[];
}
export const MobileNavToggle: React.FC<MobileNavToggleProps> = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="min-[901px]:hidden flex items-center gap-2 ml-auto">
        <span className="font-mono text-xs font-semibold bg-plum-tint text-plum-deep px-2.5 py-1 rounded-full">
          18+
        </span>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="flex items-center justify-center w-11 h-11 border border-line rounded-md"
        >
          <span className="relative block w-[18px] h-[2px] bg-ink">
            <span className="absolute left-0 -top-1.5 w-[18px] h-[2px] bg-ink" />
            <span className="absolute left-0 top-1.5 w-[18px] h-[2px] bg-ink" />
          </span>
        </button>
      </div>

      {open && (
        <nav className="min-[901px]:hidden border-t border-line pb-4 flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="w-full py-3.5 border-b border-line text-sm text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};