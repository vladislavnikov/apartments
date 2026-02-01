'use server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Language } from 'components/language-provider'

export async function getApartments(language: Language) {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    locale: language,
    fallbackLocale: false,
    where: { title: { equals: 'Apartments' } },
    limit: 1,
  })
  return docs
}
