'use client'
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react'
import { useLanguage } from './language-provider'

export default function LanguageChange() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage()

  const selectedValue = selectedLanguage === 'en' ? 'English' : 'Български'

  const handleSelectionChange = (keys: any) => {
    const language = keys.currentKey
    setSelectedLanguage(language === 'English' ? 'en' : 'bg')
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
