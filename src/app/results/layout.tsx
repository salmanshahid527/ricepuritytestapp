import type { Metadata } from 'next';
import { BASE_URL } from '@/lib/site';

// Personal result page: kept out of the index, but its links are followed.
export const metadata: Metadata = {
  title: 'Your Results',
  description: 'Your Rice Purity Test score, what it means, and how it compares with the estimated typical ranges by age.',
  robots: { index: false, follow: true },
  alternates: { canonical: `${BASE_URL}/results` },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
