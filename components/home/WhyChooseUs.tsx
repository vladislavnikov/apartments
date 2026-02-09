'use client'

import React from 'react'
import type { Locale } from '@/app/[locale]/home/page'

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
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 px-10">
        <div>
          <h2 className="text-lg pl-10 pt-8 text-black font-semibold mb-4">{heading}</h2>

          <ul className="space-y-2 pl-9 text-sm text-gray-800 list-disc list-inside">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="w-full h-[300px] md:h-[350px] overflow-hidden border">
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
