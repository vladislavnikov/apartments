'use client'

import { usePathname } from 'next/navigation'
import TopNav from './navbar'

export default function NavbarWrapper() {
  const pathname = usePathname()
  const isHome = pathname.endsWith('/home')

  return isHome ? <></> : <TopNav />
}
