import 'server-only'

import { getPayload } from 'payload'
import config from '@payload-config'
import { parseApartments } from './jsonDestructor'

export type Locale = 'en' | 'bg'

export async function getApartments(locale: Locale) {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'pages',
    locale, // ✅ "en" or "bg"
    fallbackLocale: false,
    where: { title: { equals: 'Apartments' } },
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
