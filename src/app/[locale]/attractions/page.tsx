import ExplorePlovdiv from './ExplorePlovdiv'

type Locale = 'en' | 'bg'

export default async function AttractionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? 'bg' : 'en'

  return <ExplorePlovdiv locale={loc} />
}
