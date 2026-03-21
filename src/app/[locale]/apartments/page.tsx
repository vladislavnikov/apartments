import ImageCarousel from '../../../../components/apartments/ImageCarousel'
import { Locale } from '../../../shared/enum'
import { getApartments } from '../../api/apartments'
import ApartmentCard from './apartament-card'

function pickBg(i: number) {
  return i % 2 === 0 ? 'bg-[var(--color-one)]' : 'bg-[var(--color-two)]'
}

export default async function ApartmentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? Locale.BG : Locale.EN

  const price = loc === Locale.BG ? 'от' : 'from'
  const images = [
    '/apartments/plans.png',
    '/apartments/sofa.png',
    '/apartments/people.png',
    '/apartments/tag.png',
  ]

  const apartments = await getApartments(loc)

  if (!apartments) {
    return <div className="p-6 text-black">No apartments page found for {loc}.</div>
  }

  return (
    <div className="w-full mt-2">
      <div className="max-w-4xl mt-2 mx-auto text-black mb-4 sm:mb-5 px-3 sm:px-4">
        <div className="space-y-4 sm:space-y-5">
          {apartments.sections?.map((s, i) => (
            <ApartmentCard key={i} index={i}>
              <article className="grid grid-cols-1 md:grid-cols-2 items-stretch overflow-hidden rounded-lg md:rounded-none lg:rounded-lg md:h-[420px] md:max-h-[335px]">
                <div className={`${pickBg(i)} md:h-full`}>
                  <div className="hidden md:flex h-full items-center justify-center px-6 lg:px-8">
                    <div className="w-full">
                      <h3 className="text-lg text-[var(--color-logo)] font-bold lg:text-xl font-semibold italic mb-5 text-center">
                        {s.sectionTitle}
                      </h3>

                      <ul className="space-y-2 pt-1 lg:text-xl">
                        {s.content.slice(0, -1).map((line: string, idx: number) => (
                          <li key={idx} className="flex ml-6 gap-2 lg:gap-3 items-center">
                            <img
                              src={images[idx % images.length]}
                              alt=""
                              className="w-7 h-7 object-cover rounded mt-1 flex-shrink-0"
                            />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>

                      {s.content.at(-1) && (
                        <div className="mt-8 flex justify-center">
                          <div className="text-black px-4 py-1 rounded-lg text-center shadow-md">
                            <span className="text-xl flex items-center gap-2">
                              <img
                                src={images[3]}
                                alt=""
                                className="w-7 h-7 object-cover rounded mt-1 flex-shrink-0"
                              />
                              {price} {s.content.at(-1)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:hidden p-5 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic mb-4 sm:mb-5 md:mb-6 text-center">
                      {s.sectionTitle}
                    </h2>

                    <div className="grid grid-cols-[1fr_auto] items-end gap-4">
                      <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
                        {s.content.slice(0, -1).map((line: string, idx: number) => (
                          <li key={idx} className="flex ml-6 gap-2 lg:gap-3 items-center">
                            <img
                              src={images[idx % images.length]}
                              alt=""
                              className="w-7 h-7 object-cover rounded mt-1 flex-shrink-0"
                            />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>

                      {s.content.at(-1) && (
                        <div className="flex justify-center items-center">
                          <div className="text-black px-3 py-1 rounded-lg text-center shadow-md">
                            <span className="text-base flex items-center gap-2">
                              <img
                                src={images[3]}
                                alt=""
                                className="w-7 h-7 object-cover rounded mt-1 flex-shrink-0"
                              />
                              {price} {s.content.at(-1)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="relative h-[220px] sm:h-[260px] md:h-full overflow-hidden">
                  <ImageCarousel title={s.sectionTitle} images={s.images ?? []} />

                  <div className="absolute top-3 right-3 pointer-events-none bg-white/15 backdrop-blur-md border border-white/30 rounded-full p-2 shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white drop-shadow"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <circle cx="10.5" cy="10.5" r="6.5" />
                      <path d="M16.5 16.5L21 21" strokeLinecap="round" />
                      <path d="M10.5 7.5v6M7.5 10.5h6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </article>
            </ApartmentCard>
          ))}
        </div>
      </div>
    </div>
  )
}
