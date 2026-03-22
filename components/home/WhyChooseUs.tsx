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
          'В близост до денонощен магазин за хранителни стоки и алкохол',
          'Частно паркомясто',
          'Напълно оборудвана кухня',
        ]

  return (
    <section className="bg-white">
      <div className="max-w-3xl sm:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
        <div className="pt-3 pb-3 ml-2 lg:pt-0 lg:pb-10">
          <AnimateIn from="left" className="flex flex-col justify-center">
            <h2
              className="text-2xl sm:text-xl md:text-2xl text-[var(--color-logo)] font-bold mb-3 sm:mb-4 px-2 sm:px-4 md:px-6 
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.9487202855926!2d24.73547497659484!3d42.151384148258884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd100190aa58d%3A0xe22e28d09398676d!2sApartments%20by%20the%20river!5e0!3m2!1sen!2sbg!4v1774191808856!5m2!1sen!2sbg"
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
