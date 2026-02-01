'use client'
import React, { useEffect } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { Language, useLanguage } from './language-provider'

export default function Footer() {
  const { selectedLanguage } = useLanguage()

  useEffect(() => {}, [selectedLanguage])

  return (
    <footer>
      <div className="pt-10 bg-cover bg-auto bg-center bg-[url('/footer.avif')]">
        <div className="mx-auto w-[90%] max-w-4xl bg-black/85 py-5 rounded-md">
          <div className="flex flex-col md:flex-row justify-center gap-20 text-sm text-white">
            <div className="text-center">
              <h3 className="font-semibold">
                {selectedLanguage === Language.EN ? 'Contact Us' : 'Свържете се с нас'}
              </h3>
              <p>office@todorov-co.com</p>
              <p>+359 89 910 0537</p>
              <div className="flex justify-center">
                <FaFacebookF />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold">
                {selectedLanguage === Language.EN ? 'Address' : 'Адрес'}
              </h3>
              <p>{selectedLanguage === Language.EN ? 'ul. „Mostova“ 1' : 'ул. „Мостова“ 1'}</p>
              <p>{selectedLanguage === Language.EN ? 'Plovdiv, 4000' : 'Пловдив, 4000'}</p>
              <p>{selectedLanguage === Language.EN ? 'Bulgaria' : 'България'}</p>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Apartments by the River. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
