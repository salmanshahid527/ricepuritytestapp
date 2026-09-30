import Link from 'next/link';
import { Logo } from '../atoms/Logo';
import { ButtonLink } from '../atoms/Button';

const NAV = [
  { href: '/rice-purity-test-questions', label: 'Questions' },
  { href: '/rice-purity-test-score', label: 'Score meaning' },
  { href: '/rice-purity-test-average-score-by-age', label: 'Averages by age' },
];

export function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="page flex h-16 items-center justify-between gap-2">
        <Logo />
        <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-2">
          <ul className="flex items-center">
            {NAV.map((n) => (
              <li key={n.href} className="hidden lg:block">
                <Link href={n.href} className="inline-flex min-h-tap items-center rounded-md px-3 text-small font-medium text-ink-2 hover:bg-sunken hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="inline-flex min-h-tap items-center whitespace-nowrap rounded-md px-2 text-small font-medium text-ink-2 hover:bg-sunken hover:text-ink sm:px-3">
                Guides
              </Link>
            </li>
          </ul>
          <ButtonLink href="/test" className="whitespace-nowrap px-3 text-[0.9375rem] sm:px-5">
            Take the test
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
