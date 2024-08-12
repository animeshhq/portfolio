import { defineCollection, z } from 'astro:content';

const newsletter = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    group: z.string(), // Group name (e.g., Tech, Design, Entrepreneurship)
  }),
});

export const collections = {
  newsletter,
};
