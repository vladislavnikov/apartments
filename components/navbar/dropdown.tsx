'use client'

import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/shared/enum'

function replaceLocale(pathname: string, newLocale: Locale.EN | Locale.BG) {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length === 0) return `/${newLocale}`

  if (parts[0] === Locale.EN || parts[0] === Locale.BG) {
    parts[0] = newLocale
    return '/' + parts.join('/')
  }

  return `/${newLocale}/${parts.join('/')}`
}

export default function LanguageChange() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams<{ locale?: string }>()
  const locale = params?.locale === Locale.BG ? Locale.BG : Locale.EN

  const selectedValue =
    locale === Locale.EN ? (
      <img src="/languages/uk.png" alt="English flag" className="w-6 h-6" />
    ) : (
      <img src="/languages/bg.png" alt="Bulgarian flag" className="w-6 h-6" />
    )

  const handleSelectionChange = (keys: any) => {
    const picked = keys.currentKey as string
    const newLocale: Locale.EN | Locale.BG = picked === 'English' ? Locale.EN : Locale.BG

    router.push(replaceLocale(pathname || '/', newLocale))
    router.refresh()
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="h-11 w-11 min-w-0 p-0 border-none" variant="ghost">
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
        <DropdownItem key="English">
          <div className="flex items-cente">
            <img src="/languages/uk.png" alt="English flag" className="w-6 h-6 mr-1" />
            English
          </div>
        </DropdownItem>
        <DropdownItem key="Bulgarian">
          <div className="flex items-center">
            <img src="/languages/bg.png" alt="Bulgarian flag" className="w-6 h-6 mr-1" />
            Bulgarian
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
