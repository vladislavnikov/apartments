import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages', // Името на колекцията
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text', // Заглавие на страницата
      localized: true,
    },
    {
      name: 'sections',
      type: 'array', // За динамични подсекции
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          localized: true,
        },
        {
          name: 'order',
          type: 'number',
        },
        {
          name: 'sectionContent',
          type: 'richText',
          localized: true,
        },
        {
          name: 'sectionImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
