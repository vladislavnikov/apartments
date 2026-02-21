import 'server-only'
import { getPayload } from 'payload'
import config from '@payload-config'
import { parseApartments } from '../lib/jsonDestructor'

import { Locale } from '@/shared/enum'

export async function getApartments(locale: Locale) {
  const payload = await getPayload({ config })

  const title = locale === 'bg' ? 'Апартаменти' : 'Apartments'

  const { docs } = await payload.find({
    collection: 'pages',
    locale,
    fallbackLocale: false,
    where: { title: { equals: title } },
    limit: 1,
  })

  if (!docs.length) return null

  const page = docs[0]

  return {
    id: page.id,
    title: page.title,
    sections: page.sections?.map(parseApartments),
  }
}
