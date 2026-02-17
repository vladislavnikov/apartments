'use client'

import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react'
import { useParams, usePathname, useRouter } from 'next/navigation'

function replaceLocale(pathname: string, newLocale: 'en' | 'bg') {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length === 0) return `/${newLocale}`

  if (parts[0] === 'en' || parts[0] === 'bg') {
    parts[0] = newLocale
    return '/' + parts.join('/')
  }

  return `/${newLocale}/${parts.join('/')}`
}

export default function LanguageChange() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams<{ locale?: string }>()
  const locale = params?.locale === 'bg' ? 'bg' : 'en'

  const selectedValue = locale === 'en' ? 'English' : 'Български'

  const handleSelectionChange = (keys: any) => {
    const picked = keys.currentKey as string
    const newLocale: 'en' | 'bg' = picked === 'English' ? 'en' : 'bg'

    router.push(replaceLocale(pathname || '/', newLocale))
    router.refresh()
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="capitalize rounded-none h-12 px-3 sm:px-4" variant="bordered">
          {selectedValue}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        disallowEmptySelection
        aria-label="Language selection"
        selectedKeys={new Set([locale === 'en' ? 'English' : 'Bulgarian'])}
        selectionMode="single"
        variant="flat"
        onSelectionChange={handleSelectionChange}
        className="text-black"
      >
        <DropdownItem key="English">English</DropdownItem>
        <DropdownItem key="Bulgarian">Български</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
