import ExtrasRow from 'components/home/ExtrasRow'
import WhyChooseUs from 'components/home/WhyChooseUs'
import { Locale } from '@/shared/enum'
import TransparentNav from 'components/navbar/homeNavbar'
import HeroVideo from 'components/home/videoCarousel'

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
            One and two-bedroom apartments for short-term rentals, situated in the heart of Plovdiv.
        `,
        }
      : {
          title: 'Апартаменти край реката',
          text: `
            Едностайни и двустайни апартаменти за краткосрочно настаняване, разположени в сърцето на Пловдив.
        `,
        }

  return (
    <div className="w-full">
      <div className="relative w-full h-[100vh] sm:h-[32vh] md:h-[100vh] lg:h-82vh]">
        <HeroVideo />

        <div className="absolute top-0 left-0 w-full z-20">
          <TransparentNav />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center px-3 sm:px-4 md:px-6">
          <div className="w-full max-w-2xl bg-white/50 sm:bg-white/50 px-2 py-2 sm:px-6 sm:py-8 md:px-12 md:py-10 text-center">
            <img src="/logo.png" alt="Logo" className="h-100 w-200 object-contain mx-auto" />
            <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-black leading-relaxed">
              {main.text}
            </p>
          </div>
        </div>
      </div>

      <ExtrasRow locale={loc} />

      <div className="bg-red-50 py-6 sm:py-6 flex items-center justify-center">
        <p className="max-w-6xl text-xl sm:text-xl md:text-xl text-black leading-relaxed whitespace-pre-line px-4 sm:px-6 text-center">
          {welcomeText}
        </p>
      </div>

      <WhyChooseUs locale={loc} />
    </div>
  )
}
