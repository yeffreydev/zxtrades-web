import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guias' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(['Principiante', 'Intermedio', 'Avanzado']),
    category: z.string(),
    readingTime: z.number(),
    pubDate: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const newsletter = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/newsletter' }),
  schema: z.object({
    title: z.string(),
    issue: z.number(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { guias, newsletter };
