import Link from 'next/link';

/** The hexagon-and-check mark from the original logo, simplified for small sizes. */
export function LogoMark({ className = 'h-6 w-6 sm:h-7 sm:w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <path d="M17 6h30l15 26-15 26H17L2 32z" fill="rgb(var(--c-brand))" />
      <path d="M21 33l7.5 7.5L44 25" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="-ml-1 inline-flex min-h-tap shrink-0 items-center gap-1.5 rounded-md px-1 text-ink hover:text-brand-deep sm:gap-2"
    >
      <LogoMark />
      <span className="whitespace-nowrap font-display text-[1rem] font-semibold leading-none tracking-[-0.01em] min-[400px]:text-[1.0625rem] sm:text-[1.1875rem]">
        Rice Purity Test
      </span>
    </Link>
  );
}
