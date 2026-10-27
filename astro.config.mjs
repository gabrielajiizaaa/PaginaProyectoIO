// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Publicado en Cloudflare, en la raíz del dominio. CF_PAGES_URL trae la URL del despliegue.
export default defineConfig({
  site: process.env.SITE_URL || process.env.CF_PAGES_URL || 'https://ejez.pages.dev',
  base: process.env.BASE_PATH || '/',
  devToolbar: { enabled: false },
});
