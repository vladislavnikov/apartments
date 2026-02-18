import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['en', 'bg'] as const
const DEFAULT_LOCALE = 'en'

function getPreferredLocale(req: NextRequest): (typeof LOCALES)[number] {
  const header = req.headers.get('accept-language') || ''
  const languages = header
    .split(',')
    .map((part) => part.trim().split(';')[0])
    .filter(Boolean)

  for (const lang of languages) {
    const primary = lang.toLowerCase().split('-')[0]
    if (LOCALES.includes(primary as any)) return primary as any
  }

  return DEFAULT_LOCALE
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // ✅ Skip Next internals, API, files, and ADMIN
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return NextResponse.next()

  const locale = getPreferredLocale(req)
  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|api|admin|.*\\..*).*)'],
}
