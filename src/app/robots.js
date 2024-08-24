export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    sitemap: 'https://starbucks-menu-with-prices.net/sitemap-0.xml',
    additionalSitemaps: [
      { url: 'https://starbucks-menu-with-prices.net/sitemap-0.xml', comment: 'Please crawl this site every 5 days' },
    ],
  }
}