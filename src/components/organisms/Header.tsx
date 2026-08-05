import React from 'react';
import Link from 'next/link';
import { Logo } from '../atoms/Logo';
import { MobileNavToggle } from '../molecules/MobileNavToggle';

interface HeaderProps {
  showProgress?: boolean;
  progress?: number;
}

const NAV_LINKS = [
  { href: '/test', label: 'The test' },
  { href: '/rice-purity-test-questions', label: 'All 100 questions' },
  { href: '/rice-purity-test-score', label: 'Score guide' },
  { href: '/rice-purity-test-average-score-by-age', label: 'Averages' },
  { href: '/about', label: 'About' },  
];

export const Header: React.FC<HeaderProps> = ({
  showProgress = false,
  progress = 0,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-surface border-b border-line">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="flex items-center gap-4 min-h-[70px]">
          <Logo variant="dark" size="md" showText showTagline href="/" />

          {/* Desktop nav */}
          <nav className="hidden min-[901px]:flex items-center gap-6 ml-auto">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-md text-slate hover:text-plum-deep transition-colors py-1.5 border-b-2 border-transparent"
              >
                {link.label}
              </Link>
            ))}
            <span className="font-mono text-xs font-semibold bg-plum-tint text-plum-deep px-2.5 py-1 rounded-full">
              18+
            </span>
          </nav>

          {showProgress && (
            <div className="hidden min-[901px]:flex items-center gap-3 ml-4">
              <span className="text-sm font-semibold text-ink">{progress}%</span>
              <div className="w-40 bg-line rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full bg-plum rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Mobile: badge + burger + dropdown (client component) */}
          <MobileNavToggle links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
};