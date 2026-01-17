import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ricepuritytestapp.com'),
  title: 'Rice Purity Test - Take the Official 100 Question Innocence Test',
  description: 'Take the official Rice Purity Test - a 100-question survey to assess your life experiences and innocence level. Anonymous, free, and instant results!',
  keywords: 'rice purity test, purity test, innocence test, rice university test, 100 question test, purity score',
  authors: [{ name: 'Rice Purity Test App' }],
  creator: 'Rice Purity Test App',
  publisher: 'Rice Purity Test App',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Rice Purity Test - How Innocent Are You?',
    description: 'Take the original 100-question Rice Purity Test. Anonymous and free!',
    url: 'https://www.ricepuritytestapp.com',
    siteName: 'Rice Purity Test',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.ricepuritytestapp.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rice Purity Test - How Innocent Are You?',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rice Purity Test - How Innocent Are You?',
    description: 'Take the original 100-question Rice Purity Test',
    images: ['https://www.ricepuritytestapp.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.ricepuritytestapp.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#10b981',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Rice Purity Test',
              alternateName: 'Rice Test',
              description: 'Take the original 100-question Rice Purity Test to assess your life experiences and innocence level',
              url: 'https://www.ricepuritytestapp.com',
              applicationCategory: 'EntertainmentApplication',
              operatingSystem: 'Any',
              browserRequirements: 'Requires JavaScript',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              featureList: [
                '100 questions survey',
                'Anonymous testing',
                'Instant results',
                'Score sharing',
              ],
            }),
          }}
        />
        {/* Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the Rice Purity Test?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The Rice Purity Test is a self-graded survey that assesses participants\' supposed degree of innocence in worldly matters, with 100% being the most innocent.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is the Rice Purity Test anonymous?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, the Rice Purity Test is completely anonymous. Your answers are private and not stored on our servers.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How is my score calculated?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your score is calculated by counting the number of experiences you\'ve had and subtracting from 100. The formula is: Score = 100 - (number of checked boxes). A higher score means you\'re more "pure" or have had fewer experiences.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I retake the test?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely! You can take the Rice Purity Test as many times as you like. Your previous results are not stored, so each test is independent.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What does my Rice Purity score mean?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your score indicates your level of "innocence" based on life experiences. There\'s no right or wrong score - it\'s simply a fun way to reflect on your experiences and compare with friends.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
