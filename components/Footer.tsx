'use client'
import React, { useEffect } from 'react'
import { FaFacebookF } from 'react-icons/fa'

export default function Footer({ language }: { language?: string }) {
  useEffect(() => {}, [language])

  return (
    <footer
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/footer.avif')" }}
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-black/85 py-10 rounded-md">
        <div className="flex flex-col md:flex-row justify-center gap-24 text-sm px-6 text-white">
          <div className="text-center">
            <h3 className="font-semibold mb-4">
              {language === 'en' ? 'Contact Us' : 'Свържете се с нас'}
            </h3>
            <p className="mb-2">office@todorov-co.com</p>
            <p className="mb-4">+359 89 910 0537</p>
            <div className="flex justify-center">
              <FaFacebookF />
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-4">{language === 'en' ? 'Address' : 'Адрес'}</h3>
            <p className="mb-2">{language === 'en' ? 'ul. „Mostova“ 1' : 'ул. „Мостова“ 1'}</p>
            <p className="mb-2">{language === 'en' ? 'Plovdiv, 4000' : 'Пловдив, 4000'}</p>
            <p>{language === 'en' ? 'Bulgaria' : 'България'}</p>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Apartments by the River. All rights reserved.
        </div>
      </div>
      <div className="h-[420px]" />
    </footer>
  )
}
