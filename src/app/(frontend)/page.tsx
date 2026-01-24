import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const pages = await payload.find({
    collection: 'pages',
    locale: 'bg',
  })

  console.log('Pages:', pages)

  return <> </>
}
