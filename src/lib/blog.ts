import { getCollection } from 'astro:content';

/** Posts publicados (sin borradores), del más reciente al más antiguo. */
export async function getPosts() {
  return (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export const fmtDate = (d: Date, month: 'long' | 'short' = 'long') =>
  d.toLocaleDateString('es', { timeZone: 'UTC', day: 'numeric', month, year: 'numeric' });

/** Minutos de lectura aproximados (200 palabras/min). */
export const readingTime = (body = '') => Math.max(1, Math.round(body.split(/\s+/).length / 200));
