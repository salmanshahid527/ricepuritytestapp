import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rice Purity Test Results – Your Score & What It Means',
  description: 'See your Rice Purity Test score explained — understand what your result means and compare with average scores. Fun, fast, and instant!',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
