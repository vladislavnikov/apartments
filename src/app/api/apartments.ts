// 'use server'
// import { getPayload } from 'payload'
// import config from '@payload-config'
// import { Language } from 'components/language-provider'
// import { parseApartments } from '../lib/jsonDestructor'

// export async function getApartments(language: Language) {
//   const payload = await getPayload({ config })

//   const { docs } = await payload.find({
//     collection: 'pages',
//     locale: language,
//     fallbackLocale: false,
//     where: { title: { equals: 'Apartments' } },
//     limit: 1,
//   })

//   if (!docs.length) return null

//   const page = docs[0]

//   const parsedSections = page.sections?.map(parseApartments)

//   return {
//     id: page.id,
//     title: page.title,
//     sections: parsedSections,
//   }
// }
