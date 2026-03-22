import type { Metadata } from 'next'
import { getSiteUrl, isNoIndex } from '@/lib/site'
import { Locale } from '@/shared/enum'

const ROUTES = {
  home: '/home',
  apartments: '/apartments',
  attractions: '/attractions',
  booking: '/booking',
} as const

export type SeoRouteKey = keyof typeof ROUTES

export function pathForRoute(key: SeoRouteKey): string {
  return ROUTES[key]
}

const COPY: Record<SeoRouteKey, Record<Locale, { title: string; description: string }>> = {
  home: {
    [Locale.EN]: {
      title: 'Apartments by the River',
      description:
        'Eleven one- and two-bedroom apartments for short stays in the heart of Plovdiv. Comfort, riverside charm, and easy access to the old town.',
    },
    [Locale.BG]: {
      title: 'Апартаменти край реката',
      description:
        'Единадесет едностайни и двустайни апартамента за кратък престой в центъра на Пловдив. Комфорт, уют и близост до Стария град.',
    },
  },
  apartments: {
    [Locale.EN]: {
      title: 'Our apartments | Apartments by the River, Plovdiv',
      description:
        'Browse one- and two-bedroom short-term rental apartments in central Plovdiv. Photos, details, and everything you need to choose your stay.',
    },
    [Locale.BG]: {
      title: 'Нашите апартаменти | Апартаменти край реката, Пловдив',
      description:
        'Разгледайте едностайни и двустайни апартаменти за краткосрочно настаняване в центъра на Пловдив — снимки и подробности за всеки.',
    },
  },
  attractions: {
    [Locale.EN]: {
      title: 'Explore Plovdiv | Things to do near Apartments by the River',
      description:
        'Discover Plovdiv’s old town, culture, dining, and landmarks — ideal when you stay at Apartments by the River.',
    },
    [Locale.BG]: {
      title: 'Открийте Пловдив | Забележителности край Апартаменти край реката',
      description:
        'Старият град, култура, ресторанти и забележителности в Пловдив — перфектно допълнение към престоя ви при нас.',
    },
  },
  booking: {
    [Locale.EN]: {
      title: 'Book & contact | Apartments by the River, Plovdiv',
      description:
        'Book an apartment or get in touch: phone, email, social links, and map — 1 Mostova Street, Plovdiv.',
    },
    [Locale.BG]: {
      title: 'Резервация и контакт | Апартаменти край реката, Пловдив',
      description:
        'Резервирайте апартамент или се свържете с нас: телефон, имейл, социални мрежи и карта — ул. Мостова 1, Пловдив.',
    },
  },
}

export function localeFromParam(locale: string): Locale {
  return locale === Locale.BG ? Locale.BG : Locale.EN
}

export function pageMetadata(
  routeKey: SeoRouteKey,
  localeParam: string,
  extra?: Partial<Metadata>,
): Metadata {
  const locale = localeFromParam(localeParam)
  const { title, description } = COPY[routeKey][locale]
  const path = ROUTES[routeKey]
  const base = getSiteUrl()

  const enUrl = new URL(`/en${path}`, base).href
  const bgUrl = new URL(`/bg${path}`, base).href
  const canonical = locale === Locale.BG ? bgUrl : enUrl

  const ogLocale = locale === Locale.BG ? 'bg_BG' : 'en_GB'
  const imageUrl = new URL('/logo.png', base).href

  const noindex = isNoIndex()

  return {
    title: { absolute: title },
    description,
    keywords: [
      'Plovdiv apartments',
      'short-term rental Plovdiv',
      'Пловдив апартаменти',
      'настаняване Пловдив',
      'Apartments by the River',
      'Апартаменти край реката',
    ],
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        bg: bgUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      alternateLocale: locale === Locale.BG ? 'en_GB' : 'bg_BG',
      url: canonical,
      siteName: locale === Locale.BG ? 'Апартаменти край реката' : 'Apartments by the River',
      title,
      description,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    ...extra,
  }
}

export function sitemapRouteKeys(): SeoRouteKey[] {
  return Object.keys(ROUTES) as SeoRouteKey[]
}
