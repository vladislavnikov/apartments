import ExtrasRow from 'components/home/ExtrasRow'
import VerticalImageCarousel from 'components/home/VerticalCarousel'
import WhyChooseUs from 'components/home/WhyChooseUs'

type Locale = 'en' | 'bg'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? 'bg' : 'en'

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
      <div className="relative w-full overflow-hidden aspect-[21/9] md:aspect-[24/9] max-h-[500px]">
        <VerticalImageCarousel images={images} />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="w-full max-w-2xl bg-white/50 px-3 py-8 md:px-12 md:py-10 text-center">
            <h1 className="text-4xl md:text-4xl font-serif tracking-wide text-black">
              {main.title}
            </h1>

            <p className="mt-2 text-sm md:text-lg text-black ">{main.text}</p>
          </div>
        </div>
      </div>

      <ExtrasRow locale={loc} />

      <div className="bg-red-50 py-2 flex items-center justify-center">
        <p className="max-w-4xl text-sm md:text-base text-black leading-relaxed whitespace-pre-line px-4 text-center">
          {welcomeText}
        </p>
      </div>

      <WhyChooseUs locale={loc} />
    </div>
  )
}
