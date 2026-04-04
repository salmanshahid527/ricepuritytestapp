import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Rice Purity Test Results – Your Score & What It Means',
  description: 'See your Rice Purity Test score explained — understand what your result means and compare with average scores. Fun, fast, and instant!',
  robots: { index: false, follow: false },
  alternates: { canonical: `${BASE_URL}/results` },
  openGraph: {
    title: 'Rice Purity Test Results – Your Score & What It Means',
    description: 'Understand your Rice Purity Test score and compare with averages.',
    url: `${BASE_URL}/results`,
  },
  twitter: { card: 'summary_large_image' },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
