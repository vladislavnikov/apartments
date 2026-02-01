'use client'
import { useLanguage } from 'components/language-provider'
import ApartmentsData from './data/ApartmentsData'

export default function Apartments() {
  const { selectedLanguage } = useLanguage()
  return (
    <div>
      <ApartmentsData language={selectedLanguage} />
    </div>
  )
}
