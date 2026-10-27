// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Por defecto la página se sirve en la raíz del dominio (Cloudflare).
// El workflow de GitHub Pages define BASE_PATH=/PaginaProyectoIO y SITE_URL.
// En Cloudflare, CF_PAGES_URL trae la URL del despliegue.
export default defineConfig({
  site: process.env.SITE_URL || process.env.CF_PAGES_URL || 'https://ejez.pages.dev',
  base: process.env.BASE_PATH || '/',
  devToolbar: { enabled: false },
});
