import ExplorePlovdiv from './ExplorePlovdiv'
import { Locale } from '@/shared/enum'

export default async function AttractionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? Locale.BG : Locale.EN

  return <ExplorePlovdiv locale={loc} />
}
