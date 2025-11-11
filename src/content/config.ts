import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().optional(),
    transmission: z
      .object({
        heading: z.string(),
        subheading: z.string(),
        messages: z.array(
          z.object({
            speaker: z.string(),
            content: z.string(),
          }),
        ),
      })
      .optional(),
  }),
});

export const collections = { blog };
