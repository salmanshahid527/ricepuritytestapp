import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Take the Rice Purity Test Online – Check Your Score Now',
  description: 'Start the Rice Purity Test now. Complete the 100-question quiz and instantly discover your purity score. Free, anonymous, and fun!',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
