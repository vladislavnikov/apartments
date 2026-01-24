import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import '../../../styles/globals.css'
import TopNav from 'components/navbar'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const pages = await payload.find({
    collection: 'pages',
    locale: 'bg',
  })

  console.log('Pages:', pages)

  return (
    <>
      <TopNav />{' '}
    </>
  )
}
