'use client'
import React, { useEffect } from 'react'
import '../../../styles/globals.css'
import { LanguageProvider, useLanguage } from 'components/language-provider'
import TopNav from 'components/navbar'
import Footer from 'components/Footer'

interface RootLayoutProps {
  children: React.ReactNode
}

// export const metadata = {
//   description: 'A blank template using Payload in a Next.js app.',
//   title: 'Payload Blank Template',
// }

export default function RootLayout({ children }: RootLayoutProps) {
  const { selectedLanguage } = useLanguage()

  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <TopNav />
          <main>{children}</main>
          <Footer language={selectedLanguage} />
        </LanguageProvider>
      </body>
    </html>
  )
}
