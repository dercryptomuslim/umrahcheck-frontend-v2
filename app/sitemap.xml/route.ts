import { MetadataRoute } from 'next'

export async function GET(): Promise<Response> {
  const sitemap: MetadataRoute.Sitemap = [
    // Homepage
    {
      url: 'https://umrahcheck.de',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Main pages
    {
      url: 'https://umrahcheck.de/ki-analyse',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://umrahcheck.de/kontakt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Blog homepage
    {
      url: 'https://umrahcheck.de/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Blog articles
    {
      url: 'https://umrahcheck.de/blog/umrah-preise-2024-sparen',
      lastModified: new Date('2024-08-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://umrahcheck.de/blog/5-fehler-umrah-buchung',
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://umrahcheck.de/blog/umrah-unter-1200-euro',
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://umrahcheck.de/blog/umrah-mit-familie',
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://umrahcheck.de/blog/beste-hotels-kaaba',
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://umrahcheck.de/blog/umrah-ramadan-vs-winter',
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://umrahcheck.de/blog/reisebuero-vs-online',
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://umrahcheck.de/blog/versteckte-aufpreise-erkennen',
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://umrahcheck.de/blog/wie-funktioniert-umrahcheck-ki',
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${sitemap
  .map(
    (item) => `<url>
<loc>${item.url}</loc>
<lastmod>${item.lastModified instanceof Date ? item.lastModified.toISOString() : item.lastModified}</lastmod>
<changefreq>${item.changeFrequency}</changefreq>
<priority>${item.priority}</priority>
</url>`
  )
  .join('')}
</urlset>`

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}