import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '*.pdf',
      ],
    },
    sitemap: 'https://umrahcheck.de/sitemap.xml',
  }
}