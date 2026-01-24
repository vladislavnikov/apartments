import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'
import config from '@/payload.config'
import { Language } from 'components/language-provider'

export async function GET(req: NextRequest) {
  console.log('Request URL:', req.url)

  const url = new URL(req.url)
  const locale = url.searchParams.get('locale') || 'en'

  console.log('Locale:', locale)

  let validatedLocale: Language = 'en'

  if (locale) {
    validatedLocale = locale as Language
  }

  if (validatedLocale !== 'en' && validatedLocale !== 'bg') {
    return NextResponse.json({ error: 'Invalid locale provided' }, { status: 400 })
  }

  try {
    const payload = await getPayload({ config })
    const pages = await payload.find({
      collection: 'pages',
      locale: validatedLocale,
    })

    return NextResponse.json(pages, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 })
  }
}
