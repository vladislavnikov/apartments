import ExtrasRow from 'components/home/ExtrasRow'
import VerticalImageCarousel from 'components/home/verticalCarousel'
import WhyChooseUs from 'components/home/WhyChooseUs'
import { Locale } from '@/shared/enum'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? Locale.BG : Locale.EN

  const images = [
    { src: '/images/homePage/1.avif', alt: 'Home 1' },
    { src: '/images/homePage/2.avif', alt: 'Home 2' },
    { src: '/images/homePage/3.avif', alt: 'Home 3' },
  ]

  const welcomeText =
    loc === 'en' ? (
      <>
        Welcome to <em>Apartments by the River</em>, where comfort meets serenity.
        {'\n'}
        We offer 11 exquisite apartments. Each apartment is thoughtfully designed to provide
        {'\n'}a charming and cozy atmosphere, ensuring a delightful stay for our guests.
      </>
    ) : (
      <>
        Добре дошли в <em>Апартаменти край реката</em>, където комфортът среща спокойствието.
        {'\n'}
        Предлагаме 11 изискани апартамента. Всеки апартамент е внимателно обзаведен,
        {'\n'}
        за да осигури уютна атмосфера, гарантираща приятен престой за нашите гости.
      </>
    )

  const main =
    loc === 'en'
      ? {
          title: 'Apartments by the River',
          text: `
            One and two-bedroom apartments, situated in the heart of Plovdiv.
            A brand new building awaiting its visitors, ready to become their favourite place to stay.
        `,
        }
      : {
          title: 'Апартаменти край реката',
          text: `
            Едностайни и двустайни апартаменти, разположени в сърцето на Пловдив.
            Напълно нова сграда, очакваща своите посетители, готова да стане тяхното любимо място за престой.
        `,
        }

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] max-h-[400px] sm:max-h-[450px] md:max-h-[500px]">
        <VerticalImageCarousel images={images} />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-3 sm:px-4 md:px-6">
          <div className="w-full max-w-2xl bg-white/70 sm:bg-white/65 px-2 py-2 sm:px-6 sm:py-8 md:px-12 md:py-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide text-black">
              {main.title}
            </h1>

            <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-black leading-relaxed">
              {main.text}
            </p>
          </div>
        </div>
      </div>

      <ExtrasRow locale={loc} />

      <div className="bg-red-50 py-3 sm:py-2 flex items-center justify-center">
        <p className="max-w-4xl text-xs sm:text-sm md:text-base text-black leading-relaxed whitespace-pre-line px-4 sm:px-6 text-center">
          {welcomeText}
        </p>
      </div>

      <WhyChooseUs locale={loc} />
    </div>
  )
}
