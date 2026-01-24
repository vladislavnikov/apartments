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
      ? ['Home', 'Apartments', 'Nearby Attractions', 'Book an Apartment']
      : ['Начало', 'Апартаменти', 'Забележителности в близост', 'Резервирай апартамент']

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
          <div key={index} className="flex items-center">
            <NavbarItem>
              <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
            </NavbarItem>
            {index !== menuItems.length - 1 && (
              <Divider orientation="vertical" className="h-6 mx-4 border-black" />
            )}
          </div>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {!isMenuOpen && (
          <NavbarItem>
            <LanguageChanger />
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-[#F0FFFF] text-black`}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <LanguageChanger />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
