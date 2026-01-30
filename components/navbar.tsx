'use client'
import { useState } from 'react'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from '@heroui/react'
import LanguageChanger from './dropdown'
import Link from 'next/link'
import { useLanguage } from './language-provider'

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { selectedLanguage } = useLanguage()

  const menuItems =
    selectedLanguage === 'en'
      ? [
          { label: 'Home', href: '/' },
          { label: 'Apartments', href: '/apartments' },
          { label: 'Nearby Attractions', href: '/attractions' },
          { label: 'Book an Apartment', href: '/booking' },
        ]
      : [
          { label: 'Начало', href: '/' },
          { label: 'Апартаменти', href: '/apartments' },
          { label: 'Забележителности в близост', href: '/attractions' },
          { label: 'Резервирай апартамент', href: '/booking' },
        ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#F0FFFF]">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-black"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-0 text-black" justify="center">
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
            <Link className="w-full" href={item.href}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
