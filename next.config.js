/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Duplicate blog posts consolidated into the pillar pages that actually rank
      // (Search Console: these were "crawled - currently not indexed" or had ~0 clicks).
      { source: '/blog/rice-purity-test-history', destination: '/rice-purity-test-history', permanent: true },
      { source: '/blog/average-rice-purity-test-score', destination: '/rice-purity-test-average-score-by-age', permanent: true },
      { source: '/blog/rice-purity-test-score-meaning', destination: '/rice-purity-test-score', permanent: true },
      { source: '/blog/what-is-rice-purity-test', destination: '/rice-purity-test-meaning', permanent: true },
      // Redirect non-www to www (301 permanent redirect)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ricepuritytestapp.com',
          },
        ],
        destination: 'https://www.ricepuritytestapp.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            // AdSense / Funding Choices load scripts, frames and beacons from dozens of
            // rotating Google domains; an allow-list CSP silently breaks ad rendering and
            // the consent message. Keep only directives that are safe with ads.
            key: 'Content-Security-Policy',
            value: "object-src 'none'; base-uri 'self'; frame-ancestors 'none'; upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
