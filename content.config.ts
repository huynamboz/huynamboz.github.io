import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'git/**.yml',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        image: z.string(),
        url: z.string(),
      }),
    }),
  },
})
