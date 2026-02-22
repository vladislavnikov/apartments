'use client'

import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { useParams } from 'next/navigation'
import { Locale } from '../src/shared/enum'

export default function Footer() {
  const params = useParams<{ locale?: string }>()
  const locale: Locale = params?.locale === 'bg' ? Locale.BG : Locale.EN

  return (
    <footer>
      <div className="pt-6 sm:pt-8 md:pt-10 bg-no-repeat bg-cover bg-center bg-[url('/footer.jpg')]">
        <div className="mx-auto w-[92%] max-w-2xl sm:max-w-3xl md:max-w-4xl px-4 sm:px-8 md:px-12 bg-black/85 pt-6 pb-2 rounded-t-lg">
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 md:gap-20 text-xs sm:text-sm text-white">
            <div className="text-center">
              <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                {locale === 'en' ? 'Contact Us' : 'Свържете се с нас'}
              </h3>
              <p className="text-xs sm:text-sm break-all sm:break-normal">office@todorov-co.com</p>
              <p className="text-xs sm:text-sm">+359 89 910 0537</p>
              <div className="flex justify-center mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61578379520805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  <FaFacebookF className="text-base sm:text-lg" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                {locale === Locale.EN ? 'Address' : 'Адрес'}
              </h3>
              <p>{locale === Locale.EN ? '1 Mostova Street' : 'ул. „Мостова“ 1'}</p>
              <p className="text-xs sm:text-sm">
                {locale === Locale.EN ? 'Plovdiv, 4000' : 'Пловдив, 4000'}
              </p>
              <p className="text-xs sm:text-sm">{locale === Locale.EN ? 'Bulgaria' : 'България'}</p>
            </div>
          </div>

          <div className="mt-8 sm:mt-8 text-center text-xs text-gray-400 px-2">
            © {new Date().getFullYear()} Apartments by the River. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
