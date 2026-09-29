import Link from 'next/link';
import { JsonLd } from '@/components/atoms/JsonLd';
import { AdultNotice } from '@/components/molecules/AdultNotice';
import { TestForm } from '@/components/organisms/TestForm';
import { WEB_APPLICATION } from '@/lib/schema';

/**
 * Server component: the heading and notices render as plain HTML; only the
 * question form (checkbox state, progress, saving) is a client component.
 */
export default function TestPage() {
  return (
    <main id="main" className="pb-4">
      <JsonLd data={WEB_APPLICATION} />
      <div className="page-narrow pt-8 sm:pt-10">
        <h1 className="font-display text-h1 font-semibold text-ink">Take the Rice Purity Test</h1>
        <AdultNotice className="mt-5 max-w-2xl" />
        <p className="mt-4 max-w-2xl text-lead text-ink-2">
          Check each experience you&apos;ve had. Your answers are saved only in this browser and are never sent to us.
        </p>
        <p className="mt-2 max-w-2xl text-small text-ink-3">
          Your score is 100 minus the number of boxes you check. Unsure about a phrase?{' '}
          <Link href="/rice-purity-test-questions" className="link">
            Every question is explained here
          </Link>
          .
        </p>
      </div>
      <TestForm />
    </main>
  );
}
