import { getApartments } from '@/app/api/apartments'
import { Language } from 'components/language-provider'

type Props = { language: Language }

export default async function ApartmentsData({ language }: Props) {
  const apartment = await getApartments(language)
  console.log(apartment)
  return <div></div>
}
