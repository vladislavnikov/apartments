/**
 * Canonical site origin for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yoursite.com).
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) {
    const normalized = explicit.endsWith('/') ? explicit.slice(0, -1) : explicit
    return new URL(`${normalized}/`)
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}/`)
  }
  return new URL('http://localhost:3000/')
}

export function isNoIndex(): boolean {
  return process.env.NEXT_PUBLIC_NOINDEX === '1' || process.env.VERCEL_ENV === 'preview'
}
