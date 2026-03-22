import ExplorePlovdiv from './ExplorePlovdiv'
import { Locale } from '@/shared/enum'
import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-meta'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('attractions', locale)
}

export default async function AttractionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? Locale.BG : Locale.EN

  return <ExplorePlovdiv locale={loc} />
}
