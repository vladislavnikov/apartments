import TopNav from 'components/navbar/navbar'
import ImageCarousel from '../../../../components/apartments/ImageCarousel'
import { Locale } from '../../../shared/enum'
import { getApartments } from '../../api/apartments'
import ApartmentCard from './apartament-card'

function pickBg(i: number) {
  return i % 2 === 0 ? 'bg-[#6CB4EE]' : 'bg-[#B9D9EB]'
}

export default async function ApartmentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? Locale.BG : Locale.EN

  const price = loc === Locale.BG ? 'Цени от' : 'Prices from'
  const images = ['/apartments/plans.png', '/apartments/sofa.png', '/apartments/people.png']
  const apartments = await getApartments(loc)

  if (!apartments) {
    return <div className="p-6 text-black">No apartments page found for {loc}.</div>
  }

  return (
    <div className="w-full">
      <div className="max-w-4xl mt-2 mx-auto text-black mb-4 sm:mb-5 px-3 sm:px-4">
        <div className="space-y-4 sm:space-y-5">
          {apartments.sections?.map((s, i) => (
            <ApartmentCard key={i} index={i}>
              <article className="grid grid-cols-1 md:grid-cols-2 items-stretch border border-black/10 md:h-[420px] md:max-h-[335px] overflow-hidden rounded-lg sm:rounded-none">
                <div className={`${pickBg(i)} md:h-full`}>
                  <div className="hidden md:flex h-full items-center justify-center px-6 lg:px-8">
                    <div className="w-full">
                      <h3 className="text-lg lg:text-xl font-semibold italic mb-5 text-center">
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
                          <div className=" backdrop-blur-md bg-white/30 text-white px-4 py-1 rounded-lg text-center shadow-md">
                            <p className="text-xs text-white/70 mt-0.5 italic">{price}</p>
                            <span className="text-xl font-bold">{s.content.at(-1)}</span>
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
                          <div className="bg-black/80 text-white px-4 py-1 rounded-lg text-center shadow-md">
                            <p className="text-xs text-white/70 mt-0.5 italic">{price}</p>
                            <span className="text-xl font-bold">{s.content.at(-1)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="h-[220px] sm:h-[260px] md:h-full overflow-hidden">
                  <ImageCarousel title={s.sectionTitle} images={s.images ?? []} />
                </div>
              </article>
            </ApartmentCard>
          ))}
        </div>
      </div>
    </div>
  )
}
