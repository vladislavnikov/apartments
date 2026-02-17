'use client'

import React from 'react'
import Image from 'next/image'
import { Locale } from '@/app/api/apartments'

type Extra = {
  label: string
  imgSrc: string
}

export default function ExtrasRow({ locale }: { locale: Locale }) {
  const extras: Extra[] =
    locale === 'en'
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
      <div className="max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {extras.map((extra, index) => (
          <div key={index} className="flex flex-col items-center gap-0">
            <Image
              src={extra.imgSrc}
              alt={extra.label}
              width={32}
              height={32}
              className="opacity-90 contrast-100 brightness-50 mb-3"
            />
            <span className="text-sm md:text-base text-gray-700 leading-snug max-w-[140px] px-1">
              {extra.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
