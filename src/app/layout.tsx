import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Manrope } from 'next/font/google';
import { GoogleAnalyticsRouteTracker } from '@/components/GoogleAnalyticsRouteTracker';
import './globals.css';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADSENSE_CLIENT = 'ca-pub-2046389894156038';

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
  other: {
    'google-adsense-account': ADSENSE_CLIENT,
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
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.ricepuritytestapp.com/logo.png',
                width: 512,
                height: 512,
              },
              description: 'A free, anonymous online version of the classic Rice Purity Test for adults.',
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
              description: 'Take the classic 100-question Rice Purity Test online. Free, anonymous, and scored instantly in your browser.',
              applicationCategory: 'Entertainment',
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
        {/* Structured Data - WebSite (no SearchAction: the site has no search feature) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Rice Purity Test App',
              url: 'https://www.ricepuritytestapp.com',
            }),
          }}
        />
        {/* Google AdSense (Auto ads). Plain async tag in <head>, as AdSense's site review expects. */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
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
