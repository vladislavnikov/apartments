import '../../../styles/globals.css'
import { notFound } from 'next/navigation'
import TopNav from 'components/navbar'
import Footer from 'components/Footer'

const LOCALES = ['en', 'bg'] as const
type Locale = (typeof LOCALES)[number]

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
    <html lang={locale}>
      <body className="flex flex-col h-screen">
        <TopNav />
        <main className="flex flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
