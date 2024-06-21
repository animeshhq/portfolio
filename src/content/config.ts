import { defineCollection, z } from 'astro:content';

const newsletter = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(), // Add the image field here
  }),
});

export const collections = {
  newsletter,
};
