'use server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function setLanguageAndRevalidate(lang: string) {
  ;(await cookies()).set('selectedLanguage', lang)
  revalidatePath('/apartments')
}
