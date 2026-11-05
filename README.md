# ZXTrades — Landing

Landing de ZXTrades construida con [Astro](https://astro.build) sobre Node.js LTS (ver `.nvmrc`).

## Arranque

```sh
nvm install   # instala la versión de .nvmrc (Node LTS)
nvm use
npm install
npm run dev   # http://localhost:4321
```

## Estructura

| Ruta | Contenido |
| --- | --- |
| `/` | Landing: hero, pilares, últimos posts del blog, guías y comunidad de Telegram |
| `/shop` | Merch — página de "próximamente" (sin precios ni carrito) |
| `/recursos` | Guías (content collection `guias`) + calculadora de posición |
| `/blog` | Blog diario (collection `blog`). `/newsletter` redirige aquí |

- Logo: `public/logo.svg` y componente `src/components/Logo.astro`
- Productos: `src/data/products.ts`
- Guías: `src/content/guias/*.md`
- Posts del blog: `src/content/blog/*.md`
- Link de Telegram: `src/data/site.ts`

## Pendiente para producción

- Checkout real (Stripe / Shopify / Lemon Squeezy) en `src/pages/shop.astro`
- Links reales de redes en `src/components/Footer.astro`

## Publicar en el blog

1. Crea `src/content/blog/AAAA-MM-DD-titulo-corto.md`:

   ```md
   ---
   title: Análisis del día — EURUSD y oro
   summary: Una o dos frases que aparecen en la tarjeta del post.
   pubDate: 2026-11-06
   tags: [Análisis, Forex]
   draft: false   # true = no se publica todavía
   ---

   Aquí el post en Markdown: ## títulos, **negritas**, listas, > citas, [links](https://...).
   ```

2. `git add . && git commit -m "Post: ..." && git push`.

El post nuevo aparece primero en `/blog` y en la portada (últimos 3).
