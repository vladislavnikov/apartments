import { getApartments } from '@/app/api/apartments'

type Locale = 'en' | 'bg'

function pickBg(i: number) {
  return i % 2 === 0 ? 'bg-[#b7b07a]' : 'bg-[#bdbdbd]'
}

export default async function ApartmentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? 'bg' : 'en'

  const apartments = await getApartments(loc)

  if (!apartments) {
    return <div className="p-6 text-black">No apartments page found for {loc}.</div>
  }

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto text-black mb-5">
        <h2 className="text-2xl font-medium text-center py-4 text-black">
          {locale === 'bg' ? 'Апартаменти' : 'Apartments'}
        </h2>

        <div className="space-y-5">
          {apartments.sections?.map((s, i) => {
            const firstImg = s.images?.[0]

            return (
              <article
                key={i}
                className=" grid grid-cols-1 md:grid-cols-2 items-stretch border border-black/10 md:h-[420px] md:max-h-[350px] md:overflow-hidden"
              >
                <div className={`${pickBg(i)} md:h-full`}>
                  <div className="hidden md:flex h-full items-center justify-center p-10">
                    <div className="w-full">
                      <h3 className="text-xl font-semibold italic mb-5">{s.sectionTitle}</h3>

                      <ul className="space-y-3 text-lg">
                        {s.content.map((line: string, idx: number) => (
                          <li key={idx} className="flex gap-3">
                            <span className="mt-3 inline-block h-1.5 w-1.5 rounded-full bg-black/80" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="md:hidden p-8">
                    <h2 className="text-3xl font-semibold italic mb-6">{s.sectionTitle}</h2>
                    <ul className="space-y-3 text-lg">
                      {s.content.map((line: string, idx: number) => (
                        <li key={idx} className="flex gap-3">
                          <span className="inline-block h-1 w-1 rounded-full bg-black/80" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:h-full h-[260px] overflow-hidden">
                  {firstImg?.url ? (
                    <img
                      src={firstImg.url}
                      alt={firstImg.alt || s.sectionTitle}
                      className="block w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
                      No image
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
