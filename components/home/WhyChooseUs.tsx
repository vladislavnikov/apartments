'use client'

import AnimateIn from '@/app/[locale]/booking/animation'
import { Locale } from '@/shared/enum'
import React from 'react'

export default function WhyChooseUs({ locale }: { locale: Locale }) {
  const heading = locale == Locale.EN ? 'Why Choose Us?' : 'Защо да изберете нас?'

  const points =
    locale === Locale.EN
      ? [
          'Prime location near the city center',
          'Easy access to public transportation',
          'Restaurants and bars in the area',
          '24/7 food and alcohol shop nearby',
          'Private parking space',
          'Fully equipped kitchen',
        ]
      : [
          'Отлично местоположение близо до центъра на града',
          'Лесен достъп до обществен транспорт',
          'Ресторанти и барове в района',
          'Денонощен магазин за хранителни стоки и алкохол наблизо',
          'Частно паркомясто',
          'Напълно оборудвана кухня',
        ]

  return (
    <section className="bg-white">
      <div className="max-w-3xl sm:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
        <div className="pb-10 ml-2">
          <AnimateIn from="left" className="flex flex-col justify-center">
            <h2
              className="text-base sm:text-lg md:text-xl text-black font-semibold mb-3 sm:mb-4 px-2 sm:px-4 md:px-6 
               text-center md:text-left lg:pt-10 md:pt-10 sm:pt-10"
            >
              {heading}
            </h2>
            <ul
              className="
              mx-auto md:mx-0
              w-fit max-w-full
              text-left
              list-disc list-inside md:list-outside
              space-y-1.5 sm:space-y-2
              px-2 sm:px-4 md:px-6
              text-xl sm:text-xl md:text-xl
              text-gray-800
            "
            >
              {points.map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>

        <AnimateIn from="right" className="flex flex-col gap-4 justify-center">
          <div className="w-full h-full min-h-[300px] overflow-hidden border">
            <iframe
              title="Apartments by the River"
              src="https://www.google.com/maps?q=42.1514158,24.7381369&z=16&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
