'use client'
import React, { useEffect, useState } from 'react'
import '../../../styles/globals.css'
import { useLanguage } from 'components/language-provider'
import VerticalCarousel from 'components/home/verticalCarousel'
import ExtrasRow from 'components/home/ExtrasRow'
import WhyChooseUs from 'components/home/WhyChooseUs'

export default function App() {
  const { selectedLanguage } = useLanguage()

  useEffect(() => {}, [selectedLanguage])

  const images = [
    'https://www.w3schools.com/w3images/fjords.jpg',
    'https://www.w3schools.com/w3images/mountains.jpg',
    'https://www.w3schools.com/w3images/nature.jpg',
    'https://www.w3schools.com/w3images/lights.jpg',
  ]

  const welcomeText =
    selectedLanguage === 'en' ? (
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
      <ExtrasRow selectedLanguage={selectedLanguage} />
      <div className="bg-red-50 py-0 flex items-center justify-center">
        <p className="max-w-4xl text-sm md:text-base text-black leading-relaxed whitespace-pre-line px-4 text-center">
          {welcomeText}
        </p>
      </div>
      <WhyChooseUs language={selectedLanguage} />
    </>
  )
}
