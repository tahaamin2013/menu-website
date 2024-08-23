/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    },
    async redirects() {
        return [
          {
            source: '/hot-coffees/cafe-americano',
            destination: '/hot-coffees/caffe-americano',
            permanent: true,
          },
          {
            source: '/oatmeal-&-yogurt',
            destination: '/oatmeal-and-yogurt',
            permanent: true,
          },
          {
            source: '/cold-coffee',
            destination: '/cold-coffees',
            permanent: true,
          },
          {
            source: '/hot-coffee',
            destination: '/hot-coffees',
            permanent: true,
          },
          {
            source: '/oatmeal-and-yougurt',
            destination: '/oatmeal-and-yogurt',
            permanent: true,
          },
          {
            source: '/snacks-&-sweets',
            destination: '/snacks-and-sweets',
            permanent: true,
          },
          {
            source: '/milk-juice-&-more',
            destination: '/milk-juice-and-more',
            permanent: true,
          },
        ]
        // TODO: Add All redirections
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withContentlayer({ ...nextConfig });