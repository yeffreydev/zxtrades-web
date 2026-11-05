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
| `/` | Landing: hero, pilares, preview del shop, guías destacadas y newsletter |
| `/shop` | Tienda de merch con filtros y carrito (localStorage) |
| `/recursos` | Guías (content collection `guias`) + calculadora de posición |
| `/newsletter` | Última edición renderizada + archivo (collection `newsletter`) |

- Logo: `public/logo.svg` y componente `src/components/Logo.astro`
- Productos: `src/data/products.ts`
- Guías: `src/content/guias/*.md`
- Ediciones de newsletter: `src/content/newsletter/*.md`

## Pendiente para producción

- Checkout real (Stripe / Shopify / Lemon Squeezy) en `src/pages/shop.astro`
- Proveedor de newsletter (Buttondown / Beehiiv / ConvertKit) en `src/components/SubscribeForm.astro`
- Links reales de redes en `src/components/Footer.astro`
