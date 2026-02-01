'use client'
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react'
import { Language, useLanguage } from './language-provider'
import { useRouter } from 'next/navigation'
import { setLanguageAndRevalidate } from '@/app/actions'

export default function LanguageChange() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage()
  const router = useRouter()

  const selectedValue = selectedLanguage === Language.EN ? 'English' : 'Български'

  const handleSelectionChange = async (keys: any) => {
    const newLang = keys.currentKey === 'English' ? Language.EN : Language.BG
    setSelectedLanguage(newLang)
    await setLanguageAndRevalidate(newLang)
    router.refresh()
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="capitalize rounded-none h-12" variant="bordered">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Language selection"
        selectedKeys={new Set([selectedLanguage === 'en' ? 'English' : 'Bulgarian'])}
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
