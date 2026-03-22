import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'
import { pathForRoute, sitemapRouteKeys } from '@/lib/seo-meta'
import { LOCALES } from '@/shared/enum'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin
  const entries: MetadataRoute.Sitemap = []

  for (const key of sitemapRouteKeys()) {
    const path = pathForRoute(key)
    const enUrl = `${base}/en${path}`
    const bgUrl = `${base}/bg${path}`
    const priority = path === '/home' ? 1 : 0.85

    for (const locale of LOCALES) {
      const selfUrl = `${base}/${locale}${path}`
      const langMap: Record<string, string> = { en: enUrl, bg: bgUrl, 'x-default': enUrl }
      entries.push({
        url: selfUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority,
        alternates: { languages: langMap },
      })
    }
  }

  return entries
}
