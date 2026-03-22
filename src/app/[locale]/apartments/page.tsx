import { Locale } from '../../../shared/enum'
import { getApartments } from '../../api/apartments'
import ApartmentsList from './apartments-list'
import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-meta'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('apartments', locale)
}

export default async function ApartmentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? Locale.BG : Locale.EN

  const apartments = await getApartments(loc)

  if (!apartments) {
    return <div className="p-6 text-black">No apartments page found for {loc}.</div>
  }

  return <ApartmentsList apartments={apartments} locale={loc} />
}
