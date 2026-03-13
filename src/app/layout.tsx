import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Manrope } from 'next/font/google';
import { GoogleAnalyticsRouteTracker } from '@/components/GoogleAnalyticsRouteTracker';
import './globals.css';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ricepuritytestapp.com'),
  title: 'Rice Purity Test - Free 100 Questions, Instant Score',
  description: 'Take the free Rice Purity Test online, get your score instantly, and explore score meaning plus average score ranges by age.',
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
    title: 'Rice Purity Test - Free 100 Questions, Instant Score',
    description: 'Take the free Rice Purity Test online, get your score instantly, and explore score meaning plus average score ranges by age.',
    url: 'https://www.ricepuritytestapp.com',
    siteName: 'RicePurityTestApp',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.ricepuritytestapp.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rice Purity Test - Free 100 Questions, Instant Score',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rice Purity Test - Free 100 Questions, Instant Score',
    description: 'Take the free Rice Purity Test online, get your score instantly, and explore score meaning plus average score ranges by age.',
    images: ['https://www.ricepuritytestapp.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.ricepuritytestapp.com/',
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
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rice Purity Test App',
              url: 'https://www.ricepuritytestapp.com',
              logo: 'https://www.ricepuritytestapp.com/icon.svg',
              description: 'Official Rice Purity Test - Free, anonymous, instant results',
            }),
          }}
        />
        {/* Structured Data - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Rice Purity Test',
              url: 'https://www.ricepuritytestapp.com',
              description: 'Take the official Rice Purity Test - 100 questions to measure innocence',
              applicationCategory: 'Entertainment',
              operatingSystem: 'Any',
              browserRequirements: 'Requires JavaScript',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '15420',
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
                  name: 'Is the Rice Purity Test anonymous?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! The Rice Purity Test is completely anonymous. We do not collect, store, or track your answers.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How is my score calculated?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your score is calculated by counting the number of experiences you\'ve had and subtracting from 100. The formula is: Score = 100 - (number of checked boxes).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I retake the test?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely! You can take the Rice Purity Test as many times as you like. Your previous results are not stored.',
                  },
                },
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
                  name: 'What does my Rice Purity score mean?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your score indicates your level of "innocence" based on life experiences. There\'s no right or wrong score - it\'s simply a fun way to reflect on your experiences and compare with friends.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is this the official Rice Purity Test?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'While we strive to maintain the authenticity of the original Rice University test, the official version has evolved over the years. This version contains the most commonly recognized 100 questions.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={manrope.className}>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
              `}
            </Script>
            <GoogleAnalyticsRouteTracker />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
