import type { MetadataRoute } from 'next'
import { getSiteUrl, isNoIndex } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl().origin

  if (isNoIndex()) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api'],
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
