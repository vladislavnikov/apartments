import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'sections',
      type: 'array',
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
