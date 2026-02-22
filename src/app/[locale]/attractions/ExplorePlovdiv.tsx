'use client'

import Image from 'next/image'
import React from 'react'
import { placesBg, placesEn } from './content'
import { Locale } from '@/shared/enum'

export default function ExplorePlovdiv({ locale }: { locale: Locale }) {
  const places = locale === Locale.BG ? placesBg : placesEn

  return (
    <section className="bg-white w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center py-3 sm:py-4 text-black">
        {locale === Locale.BG ? 'Разгледай Пловдив' : 'Explore Plovdiv'}
      </h2>

      {places.map((place, index) => (
        <div key={index} className={place.reverse ? 'bg-white' : 'bg-gray-100'}>
          <div className="max-w-3xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:items-stretch">
              <div className={place.reverse ? 'md:order-2' : ''}>
                <div className="relative w-full min-h-[220px] sm:min-h-[280px] md:min-h-[320px] md:h-full overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              <div
                className={
                  (place.reverse ? 'md:order-1 ' : '') + 'px-4 flex flex-col justify-center h-full'
                }
              >
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
