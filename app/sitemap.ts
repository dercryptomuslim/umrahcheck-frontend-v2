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
  ]
}