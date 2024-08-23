export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    sitemap: 'https://starbmenu.com/sitemap-0.xml',
    additionalSitemaps: [
      { url: 'https://starbmenu.com/sitemap-0.xml', comment: 'Please crawl this site every 5 days' },
    ],
  }
}