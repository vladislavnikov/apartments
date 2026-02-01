'use client'
import React, { createContext, useState, useContext } from 'react'

export enum Language {
  EN = 'en',
  BG = 'bg',
}

const defaultLanguage: Language = Language.EN

const LanguageContext = createContext<{
  selectedLanguage: Language
  setSelectedLanguage: React.Dispatch<React.SetStateAction<Language>>
}>({
  selectedLanguage: defaultLanguage,
  setSelectedLanguage: () => {},
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(defaultLanguage)

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
