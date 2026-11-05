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

/**
 * Blog diario. Para publicar: crea `src/content/blog/AAAA-MM-DD-titulo.md`
 * con este frontmatter y escribe el post en Markdown debajo.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guias, blog };
