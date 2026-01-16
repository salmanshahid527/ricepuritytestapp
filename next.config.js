/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
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
};

module.exports = nextConfig;
