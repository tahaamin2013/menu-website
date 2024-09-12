/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  redirects: async () => {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.starbucks-menu-with-prices.net',
          },
        ],
        destination: 'https://starbucks-menu-with-prices.net/',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withContentlayer(nextConfig);
