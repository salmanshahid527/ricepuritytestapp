import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rice Purity Test Results – Your Score & Interpretation',
  description: 'View your Rice Purity Test results and score interpretation. Understand what your purity score means and share with friends.',
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
