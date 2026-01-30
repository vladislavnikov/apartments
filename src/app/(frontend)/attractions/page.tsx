'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { placesBg, placesEn } from './content'
import { useLanguage } from 'components/language-provider'

export default function ExplorePlovdiv() {
  const { selectedLanguage } = useLanguage()

  useEffect(() => {}, [selectedLanguage])

  const places = selectedLanguage === 'bg' ? placesBg : placesEn

  return (
    <>
      <section className="bg-white">
        <h2 className="text-2xl font-medium text-center py-5 text-black">Explore Plovdiv</h2>
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
                <div className={place.reverse ? 'md:order-1' : ''}>
                  <h3 className="text-lg font-semibold mb-4 text-black text-center">
                    {place.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700 text-center">{place.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="bg-white py-5"></div>
    </>
  )
}
