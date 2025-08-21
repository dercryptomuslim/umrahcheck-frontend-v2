import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://umrahcheck.de'
  
  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Main pages
    {
      url: `${baseUrl}/ki-analyse`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Blog homepage
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Blog articles - with proper dates
    {
      url: `${baseUrl}/blog/umrah-preise-2024-sparen`,
      lastModified: new Date('2024-08-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // FEATURED: Budget-Artikel mit echten Preisen
    {
      url: `${baseUrl}/blog/budget-umrah-unter-450-euro`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/5-fehler-umrah-buchung`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/umrah-unter-1200-euro`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/umrah-mit-familie`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/beste-hotels-kaaba`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/umrah-ramadan-vs-winter`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/reisebuero-vs-online`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/versteckte-aufpreise-erkennen`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/wie-funktioniert-umrahcheck-ki`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Additional pages
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bewertungen`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/widerruf`,
      lastModified: new Date('2024-08-21'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Legal pages
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}