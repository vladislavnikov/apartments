import { getApartments } from '@/app/api/apartments'
import ImageCarousel from 'components/apartments/ImageCarousel'
import { Locale } from '@/shared/enum'

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
      <div className="max-w-4xl mx-auto text-black mb-4 sm:mb-5 px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center py-3 sm:py-4 text-black">
          {locale === 'bg' ? 'Апартаменти' : 'Apartments'}
        </h2>
        <div className="space-y-4 sm:space-y-5">
          {apartments.sections?.map((s, i) => (
            <article
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 items-stretch border border-black/10 md:h-[420px] md:max-h-[335px] overflow-hidden rounded-lg sm:rounded-none"
            >
              <div className={`${pickBg(i)} md:h-full`}>
                <div className="hidden md:flex h-full items-center justify-center p-8 lg:p-10">
                  <div className="w-full">
                    <h3 className="text-lg lg:text-xl font-semibold italic mb-4 lg:mb-5 text-center">
                      {s.sectionTitle}
                    </h3>

                    <ul className="space-y-2 lg:space-y-3 text-base lg:text-lg">
                      {s.content.map((line: string, idx: number) => (
                        <li key={idx} className="flex gap-2 lg:gap-3 items-start">
                          <span className="mt-2 lg:mt-3 inline-block h-1.5 w-1.5 rounded-full bg-black/80 flex-shrink-0" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:hidden p-5 sm:p-6 md:p-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic mb-4 sm:mb-5 md:mb-6 text-center">
                    {s.sectionTitle}
                  </h2>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
                    {s.content.map((line: string, idx: number) => (
                      <li key={idx} className="flex gap-2 sm:gap-3 items-start">
                        <span className="mt-2 sm:mt-3 inline-block h-1.5 w-1.5 rounded-full bg-black/80 flex-shrink-0" />
                        <span className="leading-relaxed">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-[220px] sm:h-[260px] md:h-full overflow-hidden">
                <ImageCarousel title={s.sectionTitle} images={s.images ?? []} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
