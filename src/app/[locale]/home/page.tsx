import ExtrasRow from 'components/home/ExtrasRow'
import { CarouselDefault } from 'components/home/VerticalCarousel'
import WhyChooseUs from 'components/home/WhyChooseUs'

type Locale = 'en' | 'bg'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = locale === 'bg' ? 'bg' : 'en'

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

  return (
    <div className="w-full">
      <div className="w-full overflow-x-hidden">
        <CarouselDefault />
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
