import React from 'react'
import './styles.css'
import { LanguageProvider } from 'components/language-provider'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <>{children}</>
        </LanguageProvider>
      </body>
    </html>
  )
}
