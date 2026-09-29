import React from 'react';
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
    <section className="bg-blue-50 border border-blue-200 rounded-xl p-5">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Live results from our readers</h2>
      {ready.length === 0 ? (
        <p className="text-gray-700 text-sm leading-relaxed">
          We&apos;re collecting anonymous, opt-in scores from people who finish the test ({total.toLocaleString()} so
          far). We publish an age group&apos;s figures once it has at least {MIN_SAMPLE} responses.
        </p>
      ) : (
        <>
          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
            Opt-in scores from readers who finished the test, updated hourly. Only age groups with at least {MIN_SAMPLE}{' '}
            responses are shown. Self-selected samples lean toward people who chose to share, so read these as
            indicative.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 pr-4">Age</th>
                  <th className="py-2 pr-4">Responses</th>
                  <th className="py-2 pr-4">Average</th>
                  <th className="py-2 pr-4">Median</th>
                  <th className="py-2">Middle half</th>
                </tr>
              </thead>
              <tbody>
                {ready.map((b) => (
                  <tr key={b.band} className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">{b.band}</td>
                    <td className="py-2 pr-4">{b.n.toLocaleString()}</td>
                    <td className="py-2 pr-4">{b.mean}</td>
                    <td className="py-2 pr-4">{b.median}</td>
                    <td className="py-2">{b.p25}–{b.p75}</td>
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
