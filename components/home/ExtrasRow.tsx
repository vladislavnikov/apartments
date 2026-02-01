'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Language, useLanguage } from 'components/language-provider'

type Extra = {
  label: string
  imgSrc: string
}

export default function ExtrasRow() {
  const { selectedLanguage } = useLanguage()

  useEffect(() => {}, [selectedLanguage])

  const extras: Extra[] =
    selectedLanguage === Language.EN
      ? [
          { label: 'Free Wi-Fi', imgSrc: '/icons/wifi.png' },
          { label: 'Fully Equipped Kitchen', imgSrc: '/icons/kitchen.png' },
          { label: 'Private Parking Space', imgSrc: '/icons/parking.png' },
          { label: 'Walking distance to the city center', imgSrc: '/icons/walking.png' },
        ]
      : [
          { label: 'Безплатен Wi-Fi', imgSrc: '/icons/wifi.png' },
          { label: 'Напълно оборудвана кухня', imgSrc: '/icons/kitchen.png' },
          { label: 'Частно паркомясто', imgSrc: '/icons/parking.png' },
          { label: 'На пешеходно разстояние от центъра на града', imgSrc: '/icons/walking.png' },
        ]

  return (
    <div className="bg-white py-5">
      <div className="max-w-4xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-1 text-center">
        {extras.map((extra, index) => (
          <div key={index} className="flex flex-col items-center gap-0">
            <Image
              src={extra.imgSrc}
              alt={extra.label}
              width={25}
              height={25}
              className="opacity-90 contrast-100 brightness-50"
            />
            <p className="text-sm text-gray-700 leading-tight max-w-[140px]">{extra.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
