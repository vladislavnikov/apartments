'use client'

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
      <div className="max-w-3xl sm:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-3">
        <div className="order-2 md:order-1 pb-4">
          <h2
            className="text-base sm:text-lg md:text-xl text-black font-semibold mb-3 sm:mb-4 px-2 sm:px-4 md:px-6 
               text-center md:text-left lg:pt-6 md:pt-4 sm:pt-1"
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
              text-xs sm:text-sm md:text-base
              text-gray-800
            "
          >
            {points.map((point, index) => (
              <li key={index} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-full overflow-hidden border order-1 md:order-2">
          <iframe
            title="Apartments by the River"
            src="https://www.google.com/maps?q=42.1514158,24.7381369&z=16&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
