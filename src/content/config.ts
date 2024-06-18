import { defineCollection, z } from 'astro:content';

const newsletter = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  newsletter,
};
