import '../../../styles/globals.css'
import { notFound } from 'next/navigation'
import Footer from 'components/Footer'
import TopNav from 'components/navbar/navbar'
import { Metadata } from 'next'
import { Locale, LOCALES } from '@/shared/enum'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = (LOCALES.includes(locale as Locale) ? locale : null) as Locale | null

  if (!loc) return {}

  return {
    title: loc === 'bg' ? 'Апартаменти край реката' : 'Apartments by the River',
    icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon-16x16.png',
      apple: '/favicon/favicon.ico',
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
        <TopNav />
        <main className="w-full flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
