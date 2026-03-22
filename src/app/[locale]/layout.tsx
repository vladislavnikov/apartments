import '../../../styles/globals.css'
import { notFound } from 'next/navigation'
import Footer from 'components/Footer'
import { Metadata } from 'next'
import { Locale, LOCALES } from '@/shared/enum'
import NavbarWrapper from 'components/navbar/NavbarWrapper'
import { getSiteUrl, isNoIndex } from '@/lib/site'
import SeoJsonLd from 'components/SeoJsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = (LOCALES.includes(locale as Locale) ? locale : null) as Locale | null

  if (!loc) return {}

  const base = getSiteUrl()
  const noindex = isNoIndex()
  const isBg = loc === Locale.BG
  const siteName = isBg ? 'Апартаменти край реката' : 'Apartments by the River'
  const defaultDescription = isBg
    ? 'Едностайни и двустайни апартаменти за краткосрочно настаняване в центъра на Пловдив.'
    : 'One- and two-bedroom apartments for short-term stays in central Plovdiv, Bulgaria.'
  const ogLocale = isBg ? 'bg_BG' : 'en_GB'

  return {
    metadataBase: base,
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: defaultDescription,
    applicationName: siteName,
    icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon-16x16.png',
      apple: '/favicon/favicon.ico',
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      siteName,
      url: base,
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  }
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!LOCALES.includes(locale as Locale)) notFound()

  return (
    <html lang={locale} className="h-full">
      <body className="w-full h-full overflow-x-hidden flex flex-col">
        <SeoJsonLd locale={locale} />
        <NavbarWrapper />
        <main className="w-full flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
