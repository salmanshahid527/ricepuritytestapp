import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Archivo } from 'next/font/google';
import { GoogleAnalyticsRouteTracker } from '@/components/GoogleAnalyticsRouteTracker';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { BASE_URL, SITE_NAME } from '@/lib/site';
import { ORGANIZATION, ORGANIZATION_ID } from '@/lib/schema';
import './globals.css';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADSENSE_CLIENT = 'ca-pub-2046389894156038';

// One display face for headings: Archivo Bold, a sturdy grotesque with scoreboard numerals,
// self-hosted by next/font (one weight, latin, ~17 KB) with a size-adjusted Arial fallback.
// display: 'optional' — on slow mobile connections a late font swap reflowed the whole page
// (production CLS 1.0 on PageSpeed); the fallback is used for that view instead.
// Body text uses the system UI font: zero bytes, instant paint.
const display = Archivo({ subsets: ['latin'], weight: ['700'], display: 'optional', variable: '--font-display' });

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
  // favicon.ico (16/32/48 inside) for Google Search and older browsers, the SVG for modern ones
  // (sizes 32x32, not 'any', so Chrome still prefers the SVG),
  // and a solid 180px PNG for iOS, which ignores SVG touch icons.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
  themeColor: '#ffffff',
};

/** Sitewide entities. WebApplication is added on the pages that host the test (/ and /test). */
const SITE_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    ORGANIZATION,
    {
      // No SearchAction: the site has no search feature.
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: SITE_NAME,
      url: BASE_URL,
      inLanguage: 'en-US',
      publisher: { '@id': ORGANIZATION_ID },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={display.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_GRAPH) }}
        />
        {/* Google AdSense (Auto ads). Plain async tag in <head>, as AdSense's site review expects. */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only rounded-md bg-ink px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50"
        >
          Skip to content
        </a>
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
