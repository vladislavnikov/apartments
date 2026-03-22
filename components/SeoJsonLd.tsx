import { getSiteUrl } from '@/lib/site'
import { Locale } from '@/shared/enum'

type Props = { locale: string }

export default function SeoJsonLd({ locale }: Props) {
  const loc = locale === Locale.BG ? Locale.BG : Locale.EN
  const base = getSiteUrl().origin

  const name =
    loc === Locale.BG ? 'Апартаменти край реката' : 'Apartments by the River'
  const description =
    loc === Locale.BG
      ? 'Едностайни и двустайни апартаменти за краткосрочно настаняване в центъра на Пловдив.'
      : 'One- and two-bedroom apartments for short-term stays in central Plovdiv, Bulgaria.'

  const data = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name,
    description,
    url: `${base}/${loc}/home`,
    image: `${base}/logo.png`,
    telephone: '+359899100537',
    email: 'office@todorov-co.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc === Locale.BG ? 'ул. Мостова 1' : '1 Mostova Street',
      addressLocality: 'Plovdiv',
      addressCountry: 'BG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.1514158,
      longitude: 24.7381369,
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61578379520805',
      'https://www.instagram.com/apartmentsbytheriver',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
