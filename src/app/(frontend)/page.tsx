'use client'
import React, { useEffect, useState } from 'react'
import '../../../styles/globals.css'
import TopNav from 'components/navbar'
import { useLanguage } from 'components/language-provider'

export default function App() {
  const { selectedLanguage } = useLanguage()

  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPagesData = async () => {
      try {
        const response = await fetch(`/api/pages?locale=${selectedLanguage}`)
        const data = await response.json()

        if (response.ok) {
          setPages(data.docs)
        } else {
          console.error('Error fetching pages:', data.error)
        }
      } catch (error) {
        console.error('Error fetching pages:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPagesData()
  }, [selectedLanguage])

  const page = pages[0]
  const sections = page ? page.sections : []

  return (
    <div>
      <TopNav />
      <h1>Pages</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="text-blue-600">
          {pages.length > 0 ? (
            pages.map((page) => (
              <div key={page.id}>
                <h2>{page.title}</h2>
                <ul>
                  {page.sections.map((section) => (
                    <li key={section.id}>
                      <strong>{section.sectionTitle}</strong>:{' '}
                      {section.sectionContent || 'No content available'}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No pages available</p>
          )}
        </div>
      )}
    </div>
  )
}
