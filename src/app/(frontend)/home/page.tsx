import ExtrasRow from 'components/home/ExtrasRow'
import VerticalCarousel from 'components/home/verticalCarousel'
import WhyChooseUs from 'components/home/WhyChooseUs'
import { Language } from 'components/language-provider'

type HomeProps = {
  selectedLanguage: string
}

const images = [
  'https://www.w3schools.com/w3images/fjords.jpg',
  'https://www.w3schools.com/w3images/mountains.jpg',
  'https://www.w3schools.com/w3images/nature.jpg',
  'https://www.w3schools.com/w3images/lights.jpg',
]

// This is now a proper React component signature.
export default function Home({ selectedLanguage }: HomeProps) {
  const welcomeText =
    selectedLanguage === Language.EN ? (
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
    <>
      <VerticalCarousel images={images} />
      <ExtrasRow />
      <div className="bg-red-50 py-0 flex items-center justify-center">
        <p className="max-w-4xl text-sm md:text-base text-black leading-relaxed whitespace-pre-line px-4 text-center">
          {welcomeText}
        </p>
      </div>
      <WhyChooseUs language={selectedLanguage} />
    </>
  )
}
