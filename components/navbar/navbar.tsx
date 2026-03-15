'use client'

import { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import LanguageChanger from './dropdown'
import { Locale } from '../../src/shared/enum'

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const params = useParams<{ locale?: string }>()
  const locale: Locale = params?.locale === 'bg' ? Locale.BG : Locale.EN

  const withLocale = (path: string) => `/${locale}${path}`

  const menuItems = useMemo(
    () =>
      locale === 'en'
        ? [
            { label: 'Home', href: withLocale('/home') },
            { label: 'Apartments', href: withLocale('/apartments') },
            { label: 'Nearby Attractions', href: withLocale('/attractions') },
          ]
        : [
            { label: 'Начало', href: withLocale('/home') },
            { label: 'Апартаменти', href: withLocale('/apartments') },
            { label: 'Забележителности в близост', href: withLocale('/attractions') },
          ],
    [locale],
  )

  return (
    <div>
      <nav className="w-full z-20 bg-[var(--color-navbar)] relative">
        <div className="max-w-screen-xl relative flex items-center justify-between mx-auto py-4 px-4 sm:px-6">
          {/* Left side */}
          <div className="flex items-center gap-0">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex items-center w-10 h-10 justify-center rounded text-[var(--color-logo)]"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-10 h-10 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
            <LanguageChanger />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href={withLocale('/home')}>
              <img src="/logo.png" alt="Logo" className="h-22 w-44 object-contain" />
            </Link>
          </div>

          <Link
            href={withLocale('/booking')}
            className="bg-white text-[var(--color-logo)] text-sm font-medium px-4 py-2 rounded hover:bg-white/30 transition-all duration-200"
            style={{ boxShadow: '0px 0px 12px -1px #BDBDBF' }}
          >
            {locale === Locale.EN ? 'Book now' : 'Резервивай'}
          </Link>
        </div>

        {/* Dropdown */}
        <div
          className={`absolute w-full bg-[var(--color-navbar)] z-50 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col font-medium p-4 space-y-1 border-t border-gray-200">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 px-3 rounded transition-all duration-200 hover:bg-[var(--color-two)] hover:pl-5 ${
                    pathname === item.href
                      ? 'text-[var(--color-logo)] font-bold'
                      : 'text-[var(--color-logo)]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}
