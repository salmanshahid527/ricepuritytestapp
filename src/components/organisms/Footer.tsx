import Link from 'next/link';
import { LogoMark } from '../atoms/Logo';
import { AdultNotice } from '../molecules/AdultNotice';

const COLUMNS = [
  {
    label: 'The test',
    links: [
      { href: '/test', label: 'Take the test' },
      { href: '/blog/how-to-take-rice-purity-test', label: 'How to take it' },
      { href: '/rice-purity-test-questions', label: 'All 100 questions' },
    ],
  },
  {
    label: 'Guides',
    links: [
      { href: '/rice-purity-test-average-score-by-age', label: 'Average score by age' },
      { href: '/rice-purity-test-score', label: 'Score guide' },
      { href: '/rice-purity-test-meaning', label: 'What the test is' },
      { href: '/rice-purity-test-history', label: 'History' },
      { href: '/blog', label: 'All guides' },
    ],
  },
  {
    label: 'Site',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookies' },
      { href: '/disclaimer', label: 'Disclaimer' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-sunken">
      <div className="page py-10 sm:py-12">
        <AdultNotice className="max-w-2xl" />
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 font-display text-[1.125rem] font-semibold text-ink">
              <LogoMark className="h-6 w-6" /> Rice Purity Test
            </p>
            <p className="mt-3 max-w-xs text-small text-ink-3">
              A free, anonymous version of the classic 100-question test. Your answers stay in your browser.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.label} aria-label={col.label}>
              <p className="eyebrow text-ink-3">{col.label}</p>
              <ul className="mt-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex min-h-tap items-center text-small text-ink-2 hover:text-brand-deep hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-10 space-y-2 border-t border-line pt-6 text-xs text-ink-3">
          <p>© 2026 ricepuritytestapp.com | The Rice Purity Test originated at Rice University. This site is not affiliated with Rice University.</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              Email:{' '}
              <a href="mailto:contact@ricepuritytestapp.com" className="text-brand-deep underline underline-offset-2">
                contact@ricepuritytestapp.com
              </a>
            </span>
            <span>
              For press inquiries:{' '}
              <a href="mailto:press@ricepuritytestapp.com" className="text-brand-deep underline underline-offset-2">
                press@ricepuritytestapp.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
