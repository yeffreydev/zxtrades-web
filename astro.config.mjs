// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // La antigua newsletter ahora es el blog diario.
  redirects: {
    '/newsletter': '/blog',
  },
});
