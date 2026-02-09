import { getApartments } from '@/app/api/apartments'

type Locale = 'en' | 'bg'

export default async function ApartmentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? 'bg' : 'en'

  const apartments = await getApartments(loc)

  if (!apartments) {
    return <div className="p-6 text-black">No apartments page found for {loc}.</div>
  }

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-semibold mb-4">{apartments.title}</h1>

      {apartments.sections?.map((s, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-lg font-medium mb-2">{s.sectionTitle}</h2>

          <ul className="list-disc pl-5 space-y-1">
            {s.content.map((line: string, idx: number) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>

          <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
            {s.images.map((img: any) => (
              <img key={img.id} src={img.url} alt={img.alt} className="w-full h-auto" />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
