import type { ReactNode } from 'react';
import { ButtonLink } from '../atoms/Button';

interface CtaBoxProps {
  heading: string;
  children?: ReactNode;
  cta?: string;
  secondary?: { href: string; label: string };
}

/** The closing "take the test" panel on content pages. */
export function CtaBox({ heading, children, cta = 'Take the test', secondary }: CtaBoxProps) {
  return (
    <section className="mt-14 rounded-xl bg-brand-deep px-6 py-8 text-white sm:px-10 sm:py-10 [&_:focus-visible]:outline-white">
      <h2 className="mt-0 font-display text-h2 font-semibold text-white">{heading}</h2>
      {children && <div className="mt-2 max-w-xl text-white/85">{children}</div>}
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href="/test" size="lg" variant="accent">
          {cta}
        </ButtonLink>
        {secondary && (
          <ButtonLink
            href={secondary.href}
            size="lg"
            variant="quiet"
            className="text-white ring-1 ring-inset ring-white/40 hover:bg-white/10 hover:text-white"
          >
            {secondary.label}
          </ButtonLink>
        )}
      </div>
    </section>
  );
}
