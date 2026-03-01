'use client'

import { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import LanguageChanger from './dropdown'
import { Locale } from '../../src/shared/enum'

export default function TransparentNav() {
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
    <nav className="w-full z-20 backdrop-blur-md bg-white/30">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
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
            <img src="/logo.png" alt="Logo" className="h-16 w-38 object-contain" />
          </Link>
        </div>

        <Link
          href={withLocale('/booking')}
          className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded border border-white/30 hover:bg-white/30 transition-all duration-200"
        >
          Book Now
        </Link>
      </div>

      {/* Dropdown */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        }}
      >
        <ul className="flex flex-col font-medium p-4 space-y-1 border-t border-white/20">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 px-3 rounded transition-all duration-200 hover:bg-white/20 hover:pl-5 ${
                  pathname === item.href ? 'text-white bg-white/25 font-semibold' : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
