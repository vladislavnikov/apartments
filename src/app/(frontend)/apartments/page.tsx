'use server'
import { Language, useLanguage } from 'components/language-provider'
import ApartmentsData from './data/ApartmentsData'

export default async function Apartments() {
  return (
    <div>
      <ApartmentsData language={Language.EN} />
    </div>
  )
}
