'use client'

import Image from 'next/image'
import React from 'react'
import { placesBg, placesEn } from './content'

type Locale = 'en' | 'bg'

export default function ExplorePlovdiv({ locale }: { locale: Locale }) {
  const places = locale === 'bg' ? placesBg : placesEn

  return (
    <section className="bg-white w-full">
      <h2 className="text-2xl font-medium text-center py-4 text-black">
        {locale === 'bg' ? 'Разгледай Пловдив' : 'Explore Plovdiv'}
      </h2>

      {places.map((place, index) => (
        <div key={index} className={place.reverse ? 'bg-white' : 'bg-gray-100'}>
          <div className="max-w-3xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
              <div className={place.reverse ? 'md:order-2' : ''}>
                <Image
                  src={place.image}
                  alt={place.title}
                  width={700}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={place.reverse ? 'md:order-1 px-4' : 'px-4'}>
                <h3 className="text-lg font-semibold mb-2 text-black text-center">{place.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700 text-center">{place.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
