'use client'
import React, { useEffect, useState } from 'react'
import '../../../styles/globals.css'
import { useLanguage } from 'components/language-provider'
import Home from './home/page'

export default function App() {
  const { selectedLanguage } = useLanguage()

  useEffect(() => {}, [selectedLanguage])

  return <Home selectedLanguage={selectedLanguage} />
}
