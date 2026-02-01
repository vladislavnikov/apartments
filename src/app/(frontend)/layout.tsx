import React from 'react'
import '../../../styles/globals.css'
import { LanguageProvider, useLanguage } from 'components/language-provider'
import TopNav from 'components/navbar'
import Footer from 'components/Footer'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  description:
    'Apartments by the River - Plovdiv. Comfortable and modern apartments for your stay in the heart of the city.',
  title: 'Apartments by the River',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>ApartmentsByTheRiver</title>
      </head>
      <body>
        <LanguageProvider>
          <TopNav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
