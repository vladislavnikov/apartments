'use client'

import { useMemo, useState, useEffect } from 'react'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from '@heroui/react'
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
            { label: 'Book an Apartment', href: withLocale('/booking') },
          ]
        : [
            { label: 'Начало', href: withLocale('/home') },
            { label: 'Апартаменти', href: withLocale('/apartments') },
            { label: 'Забележителности в близост', href: withLocale('/attractions') },
            { label: 'Резервирай апартамент', href: withLocale('/booking') },
          ],
    [locale],
  )

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#F0FFFF] px-3 sm:px-4 md:px-6"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-black"
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-0 text-black text-sm sm:text-base"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            <NavbarItem>
              <Link href={item.href} className="whitespace-nowrap">
                {item.label}
              </Link>
            </NavbarItem>

            {index !== menuItems.length - 1 && (
              <Divider orientation="vertical" className="h-5 mx-2 sm:mx-3 md:mx-4 border-black" />
            )}
          </div>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <LanguageChanger />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-[#F0FFFF] text-black py-4`}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="py-2">
            <Link
              className="w-full block py-2 px-4 text-base hover:bg-[#E0EEEE] transition-colors"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
