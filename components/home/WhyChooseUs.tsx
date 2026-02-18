'use client'

import { Locale } from '@/app/api/apartments'
import React from 'react'

export default function WhyChooseUs({ locale }: { locale: Locale }) {
  const heading = locale === 'en' ? 'Why Choose Us?' : 'Защо да изберете нас?'

  const points =
    locale === 'en'
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
      <div className="max-w-3xl sm:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 px-4 sm:px-6">
        <div className="order-2 md:order-1">
          <h2 className="text-base sm:text-lg md:text-xl pt-4 sm:pt-6 md:pt-8 text-black font-semibold mb-3 sm:mb-4 px-2 sm:px-4 md:px-6">
            {heading}
          </h2>

          <ul className="space-y-1.5 sm:space-y-2 px-2 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base text-gray-800 list-disc list-inside">
            {points.map((point, index) => (
              <li key={index} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden border order-1 md:order-2">
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
