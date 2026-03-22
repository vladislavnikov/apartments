export type Img = {
  id: number
  url: string
  alt?: string | null
}

export type Section = {
  sectionTitle: string
  content: string[]
  images?: Img[]
}

export type Apartments = {
  sections?: Section[]
}
