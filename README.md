# EjeZ — página web del proyecto

Página en Astro con la información de la presentación `EjeZ_Grupo4.pptx`, los resultados del Excel y los videos del simulador.

## Uso

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera la carpeta dist/ lista para publicar
```

## Dónde editar

- **Datos y textos:** `src/data/ejez.ts` (integrantes, carnés, correo, cifras de cada sección).
- **Secciones:** `src/components/` (Hero, Problema, Colas, PL, Simulacion, Inversion, Cierre).
- **Estilos y animaciones:** `src/styles/global.css` y `src/scripts/motion.ts`.
- **Videos e imágenes:** `public/media/`.

## Diseño y animaciones

Estilo brutalista: papel, tinta negra y un solo acento rojo; sin sombras, brillos ni esquinas redondeadas.

Las animaciones se muestran siempre, aunque Windows/macOS tengan los efectos de animación desactivados.
El botón inferior derecho permite apagarlas o encenderlas y la preferencia se recuerda. Todo el contenido
está en el HTML, así que sin JavaScript o con animaciones apagadas la página se ve completa.

## Publicar en Cloudflare

En Cloudflare: **Workers & Pages → Create → Import a repository** y elige este repo.

- Build command: `npm run build`
- Deploy command (Workers): `npx wrangler deploy` · o, si usas Pages, Build output directory: `dist`

La página se sirve en la raíz del dominio. `wrangler.jsonc` y `.node-version` ya están configurados.
GitHub Pages sigue funcionando: su workflow compila con `BASE_PATH=/PaginaProyectoIO`.
