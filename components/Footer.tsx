'use client'

import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { useParams } from 'next/navigation'

type Locale = 'en' | 'bg'

export default function Footer() {
  const params = useParams<{ locale?: string }>()
  const locale: Locale = params?.locale === 'bg' ? 'bg' : 'en'

  return (
    <footer>
      <div className="pt-6 sm:pt-8 md:pt-10 bg-no-repeat bg-cover bg-center bg-[url('/footer.jpg')]">
        <div className="mx-auto w-[92%] max-w-2xl sm:max-w-3xl md:max-w-4xl px-4 sm:px-8 md:px-12 bg-black/85 py-6 rounded-t-lg">
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 md:gap-20 text-xs sm:text-sm text-white">
            <div className="text-center">
              <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                {locale === 'en' ? 'Contact Us' : 'Свържете се с нас'}
              </h3>
              <p className="text-xs sm:text-sm break-all sm:break-normal">office@todorov-co.com</p>
              <p className="text-xs sm:text-sm">+359 89 910 0537</p>
              <div className="flex justify-center mt-2">
                <FaFacebookF className="text-base sm:text-lg" />
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                {locale === 'en' ? 'Address' : 'Адрес'}
              </h3>
              <p>{locale === 'en' ? 'ul. „Mostova“ 1' : 'ул. „Мостова“ 1'}</p>
              <p className="text-xs sm:text-sm">
                {locale === 'en' ? 'Plovdiv, 4000' : 'Пловдив, 4000'}
              </p>
              <p className="text-xs sm:text-sm">{locale === 'en' ? 'Bulgaria' : 'България'}</p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center text-xs text-gray-400 px-2">
            © {new Date().getFullYear()} Apartments by the River. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
