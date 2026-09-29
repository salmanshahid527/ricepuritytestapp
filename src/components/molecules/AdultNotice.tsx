import { Icon } from '../atoms/Icon';

/** The 18+ notice. Shown at the start of the test and in the footer. */
export function AdultNotice({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <p
      className={`flex items-start gap-2.5 rounded-md border border-note-line bg-note px-4 py-3 text-small text-note-ink ${className}`}
    >
      <Icon name="info" className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0" />
      <span>
        <strong className="font-semibold">For adults 18+ only.</strong>{' '}
        {compact
          ? 'If you’re under 18, please skip this test.'
          : 'The questions cover sex, alcohol, drugs and the law. If you’re under 18, please skip this test.'}
      </span>
    </p>
  );
}
