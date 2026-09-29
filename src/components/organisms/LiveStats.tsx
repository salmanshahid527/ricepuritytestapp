import { getBandStats, MIN_SAMPLE, statsConfigured } from '@/lib/stats';

/**
 * Server component. Shows real, opt-in averages once a band has enough
 * responses; otherwise says how many have been collected. Renders nothing
 * until the statistics store is configured.
 */
export async function LiveStats() {
  if (!statsConfigured) return null;
  const stats = await getBandStats();
  if (!stats) return null;
  const total = stats.reduce((s, b) => s + b.n, 0);
  const ready = stats.filter((b) => b.n >= MIN_SAMPLE);

  return (
    <section aria-labelledby="live-results" className="rounded-lg border border-line bg-surface p-5 sm:p-6">
      <h2 id="live-results" className="mt-0 font-display text-h3 font-semibold text-ink">
        Live results from our readers
      </h2>
      {ready.length === 0 ? (
        <p className="mt-2 text-small text-ink-2">
          We&apos;re collecting anonymous, opt-in scores from people who finish the test ({total.toLocaleString()} so
          far). We publish an age group&apos;s figures once it has at least {MIN_SAMPLE} responses.
        </p>
      ) : (
        <>
          <p className="mt-2 text-small text-ink-2">
            Opt-in scores from readers who finished the test, updated hourly. Only age groups with at least {MIN_SAMPLE}{' '}
            responses are shown. Self-selected samples lean toward people who chose to share, so read these as
            indicative.
          </p>
          <div className="table-wrap mt-3">
            <table className="table-clean">
              <thead>
                <tr>
                  <th scope="col">Age</th>
                  <th scope="col">Responses</th>
                  <th scope="col">Average</th>
                  <th scope="col">Median</th>
                  <th scope="col">Middle half</th>
                </tr>
              </thead>
              <tbody>
                {ready.map((b) => (
                  <tr key={b.band}>
                    <td className="font-semibold text-ink">{b.band}</td>
                    <td>{b.n.toLocaleString()}</td>
                    <td>{b.mean}</td>
                    <td>{b.median}</td>
                    <td>
                      {b.p25}–{b.p75}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
