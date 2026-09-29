import { Suspense } from 'react';
import { ResultsView } from '@/components/organisms/ResultsView';
import { LiveStats } from '@/components/organisms/LiveStats';

function Fallback() {
  return (
    <div className="page pt-8 sm:pt-10">
      <h1 className="font-display text-h1 font-semibold text-ink">Your Rice Purity score</h1>
      <div className="card mt-6 min-h-[22rem] p-6 sm:min-h-[18rem] sm:p-10">
        <p className="text-ink-3" role="status">
          Loading your score…
        </p>
      </div>
    </div>
  );
}

/** The score lives in the browser, so the view is a client component; real opt-in stats render on the server. */
export default function ResultsPage() {
  return (
    <main id="main" className="min-h-[100svh] pb-4">
      <Suspense fallback={<Fallback />}>
        <ResultsView liveStats={<LiveStats />} />
      </Suspense>
    </main>
  );
}
