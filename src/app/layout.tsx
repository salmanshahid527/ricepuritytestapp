import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rice Purity Test | Official 100 Question Innocence Test',
  description: 'Take the original Rice Purity Test - 100 questions to assess your life experiences and innocence level. Anonymous, free, and instant results.',
  keywords: 'rice purity test, purity test, innocence test, rice university test',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Rice Purity Test',
    description: 'Take the original 100-question Rice Purity Test',
    url: 'https://ricepuritytestapp.com',
    siteName: 'Rice Purity Test',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rice Purity Test',
    description: 'Take the original 100-question Rice Purity Test',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
