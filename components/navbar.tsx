'use client'
import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/navbar'

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-sky-50">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem></NavbarItem>
        <NavbarItem isActive></NavbarItem>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Apartments</NavbarItem>
        <NavbarItem>Contacts</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
        <NavbarItem></NavbarItem>
      </NavbarContent>
      <NavbarMenu></NavbarMenu>
    </Navbar>
  )
}
