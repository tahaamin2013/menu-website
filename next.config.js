/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    },
    async redirects() {
        return [
{
  source: '/lemonade-refreshers-summer-berry',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/berry-summer-refreshers-lemonade',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},

        ]
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withContentlayer({ ...nextConfig }); 