'use client'

import React from 'react'
import Image from 'next/image'
import { Locale } from '@/shared/enum'

type Extra = {
  label: string
  imgSrc: string
}

export default function ExtrasRow({ locale }: { locale: Locale }) {
  const extras: Extra[] =
    locale === Locale.EN
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
    <div className="bg-white py-8 sm:py-8 md:py-8">
      <div className="max-w-10xl sm:max-w-4xl mx-auto px-3 sm:px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
        {extras.map((extra, index) => (
          <div key={index} className="flex flex-col items-center gap-0">
            <Image
              src={extra.imgSrc}
              alt={extra.label}
              width={100}
              height={100}
              className="opacity-90 contrast-100 brightness-50 mb-2 sm:mb-3 w-10 h-10 sm:w-10 sm:h-10"
            />
            <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-tight sm:leading-snug max-w-[140px] sm:max-w-[160px] px-1">
              {extra.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
