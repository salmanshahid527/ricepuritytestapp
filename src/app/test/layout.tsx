import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Take the Rice Purity Test Online – Check Your Score Now',
  description: 'Start the Rice Purity Test now. Complete the 100-question quiz and instantly discover your purity score. Free, anonymous, and fun!',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/test` },
  openGraph: {
    title: 'Take the Rice Purity Test Online – Check Your Score Now',
    description: 'Complete the 100-question Rice Purity Test. Free, anonymous, instant results.',
    url: `${BASE_URL}/test`,
  },
  twitter: { card: 'summary_large_image' },
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
