'use client'

import { useMemo, useState } from 'react'
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
import { useParams } from 'next/navigation'
import LanguageChanger from './dropdown'

type Locale = 'en' | 'bg'

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const params = useParams<{ locale?: string }>()
  const locale: Locale = params?.locale === 'bg' ? 'bg' : 'en'

  // Helper: prefix every route with /en or /bg
  const withLocale = (path: string) => `/${locale}${path}`

  const menuItems = useMemo(
    () =>
      locale === 'en'
        ? [
            { label: 'Home', href: withLocale('/home') }, // ✅ no bare "/"
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
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#F0FFFF] px-4 sm:px-6">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-black"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-0 sm:gap-4 md:gap-8 text-black" justify="center">
        {menuItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            <NavbarItem>
              <Link href={item.href}>{item.label}</Link>
            </NavbarItem>

            {index !== menuItems.length - 1 && (
              <Divider orientation="vertical" className="h-5 mx-4 border-black" />
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
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-[#F0FFFF] text-black`}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
