import ExtrasRow from 'components/home/ExtrasRow'
import WhyChooseUs from 'components/home/WhyChooseUs'
import { Locale } from '@/shared/enum'
import TransparentNav from 'components/navbar/homeNavbar'
import HeroVideo from 'components/home/videoCarousel'
import HorizontalImageCarousel from 'components/booking/HorizontalImageCarousel'
import type { Metadata } from 'next'
import Image from 'next/image'
import { pageMetadata } from '@/lib/seo-meta'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('home', locale)
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? Locale.BG : Locale.EN

  const carouselImages = [
    { src: '/home/carousel/101.jpg', alt: 'Home 1' },
    { src: '/home/carousel/102.jpg', alt: 'Home 2' },
    { src: '/home/carousel/103.jpg', alt: 'Home 3' },
    { src: '/home/carousel/104.jpg', alt: 'Home 4' },
    { src: '/home/carousel/105.jpg', alt: 'Home 5' },
    { src: '/home/carousel/106.jpg', alt: 'Home 6' },
    { src: '/home/carousel/107.jpg', alt: 'Home 7' },
    { src: '/home/carousel/108.jpg', alt: 'Home 8' },
    { src: '/home/carousel/109.jpg', alt: 'Home 9' },
    { src: '/home/carousel/110.jpg', alt: 'Home 10' },
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
          text: (
            <>
              One and two-bedroom apartments for short-term rentals,
              <br />
              situated in the heart of Plovdiv.
            </>
          ),
        }
      : {
          title: 'Апартаменти край реката',
          text: (
            <>
              Едностайни и двустайни апартаменти за краткосрочно <br /> настаняване, разположени в
              сърцето на Пловдив.
            </>
          ),
        }

  return (
    <div className="w-full">
      <div className="relative w-full h-[100vh] sm:h-[32vh] md:h-[100vh] lg:h-82vh]">
        <HeroVideo />

        <div className="absolute top-0 left-0 w-full z-20">
          <TransparentNav />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center px-3 sm:px-4 md:px-6">
          <div
            className="w-full max-w-2xl bg-white/50 backdrop-blur-xs px-2 py-2 sm:px-6 sm:py-8 md:px-12 md:py-10 text-center"
            style={{
              maskImage: `
      linear-gradient(to right, transparent 0%, black 20%, black 60%,black 80%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, black 20%, black 60%,black 80%, transparent 100%)
    `,
              maskComposite: 'intersect',
              WebkitMaskImage: `
      linear-gradient(to right, transparent 0%, black 20%, , black 60%,black 80%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, black 20%,, black 60%, black 80%, transparent 100%)
    `,
              WebkitMaskComposite: 'source-in',
            }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={400}
              height={200}
              priority
              className="mx-auto h-100 w-200 object-contain"
            />
            <p className="text- font-medium text-[var(--color-logo)] sm:text-base md:text-base lg:text-xl leading-relaxed -translate-y-17 sm:-translate-y-17 md:-translate-y-20 lg:-translate-y-25">
              {main.text}
            </p>
          </div>
        </div>
      </div>

      <ExtrasRow locale={loc} />

      <div className="bg-[var(--color-navbar)] py-6 sm:py-6 flex items-center justify-center">
        <p className="max-w-6xl text-xl sm:text-xl md:text-xl text-black leading-relaxed whitespace-pre-line px-4 sm:px-6 text-center">
          {welcomeText}
        </p>
      </div>

      <WhyChooseUs locale={loc} />
      <div className="w-full">
        <HorizontalImageCarousel images={carouselImages} />
      </div>
    </div>
  )
}
