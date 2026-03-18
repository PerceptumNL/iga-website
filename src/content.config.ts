import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('IGA Team'),
    category: z.string(),
    readTime: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { insights };
