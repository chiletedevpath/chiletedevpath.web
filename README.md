# Chilete DevPath Web

Web oficial de Chilete DevPath, marca personal de Adrian Pisco para documentar aprendizaje, proyectos, criterio tecnico y comunidad.

Sitio publicado:

https://chiletedevpath.com/

## Objetivo

Presentar Chilete DevPath como una experiencia navegable de aprendizaje: una marca personal con origen, ruta tecnica, proyectos con contexto, recursos, criterios de publicacion responsable y canales de comunidad.

La web funciona como punto de entrada mas claro que un repositorio para personas que quieran aprender, revisar avance real o seguir el proyecto.

## Version actual

`V4.12.0`

- Fecha de revisión: 01/09/2026
- Estado: en revisión local
- Sitio: https://chiletedevpath.com/

La versión se obtiene de `package.json`, que actúa como fuente principal para el identificador mostrado por la web.

## Tecnologias

- Astro
- HTML
- CSS
- JavaScript
- SVG estático basado en Lucide
- SVG propio
- SEO y vista previa social
- Google Fonts
- GitHub Pages
- GitHub Actions

## Estructura

```txt
chiletedevpath-web/
|-- public/
|   `-- assets/
|       `-- img/
|-- src/
|   |-- components/
|   |-- data/
|   |-- i18n/
|   |-- layouts/
|   |-- pages/
|   |-- scripts/
|   `-- styles/
|       |-- components/
|       |-- core/
|       `-- pages/
|-- worker/
|   |-- src/
|   |-- test/
|   `-- wrangler.jsonc
|-- .github/
|   `-- workflows/
|-- astro.config.mjs
|-- package.json
|-- README.md
`-- CHANGELOG.md
```

## Alcance actual

- Ruta de doce módulos con estados y métricas calculados desde una única estructura bilingüe.
- Catálogo de ocho proyectos académicos con identidad estable, filtros derivados y enlaces verificados contra `academia`.
- Páginas completas en español e inglés, con modo claro y oscuro y navegación adaptable.
- CSS organizado por núcleo, componentes y páginas, con carga específica según el contenido utilizado.
- Formularios semánticos protegidos con Turnstile y un Worker que valida, limita y entrega los mensajes a EmailJS.
- Metadatos SEO por página, `hreflang`, Open Graph bilingüe y datos estructurados de `WebSite` y `Person`.
- PWA controlada con caché versionada, fallback offline ES/EN y precarga tolerante de páginas y recursos locales.
- Sitemap generado automáticamente desde las rutas de Astro.
- Políticas editoriales, de seguridad, bienestar y uso responsable de IA.

## Decisiones de diseno

- Identidad visual inspirada en Chilete, Cajamarca, sin usar simbolos institucionales como marca propia.
- Paleta basada en azul profundo, verde tecnico, camino dorado y acentos sobrios.
- Paleta preparada para modo claro y modo oscuro.
- Ruta presentada como avance progresivo, con practica y evidencia esperada.
- Navegacion pensada para comunidad, no solo para mostrar repositorios.
- Separacion entre aprendizaje, evidencia academica, portafolio futuro y criterios de publicacion segura.
- La PWA prioriza consulta offline del contenido público; los formularios y servicios externos continúan requiriendo conexión.

## Validacion realizada

- Ejecucion de `npm audit`.
- Ejecucion de `npm run build`.
- Generación de 24 páginas estáticas.
- Revisión visual en móvil desde 320 px, tablet y escritorio.
- Verificacion de ausencia de desbordes horizontales en breakpoints principales.

## Formularios protegidos

La solución mantiene los planes gratuitos de Cloudflare y EmailJS. El navegador solo conoce la clave pública del widget; la validación y los identificadores de EmailJS permanecen en el Worker.

Configuración requerida antes de publicar:

1. Crear un widget Turnstile para `chiletedevpath.com`.
2. Registrar `PUBLIC_TURNSTILE_SITE_KEY` como variable del repositorio en GitHub Actions.
3. Registrar en Cloudflare Worker los secretos `TURNSTILE_SECRET`, `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID` y `EMAILJS_PUBLIC_KEY` mediante `wrangler secret put`.
4. Ejecutar `npm run worker:check` y luego `npm run worker:deploy`.

Los valores locales se toman de `.env` y `worker/.dev.vars`; ambos están excluidos de Git. Los archivos `.env.example` y `worker/.dev.vars.example` solo documentan nombres y no contienen credenciales reales.

## Criterio editorial

El contenido debe mantenerse alineado con las politicas de Chilete DevPath: autoria clara, uso responsable de IA, publicacion segura y bienestar en el aprendizaje tecnico.

## Autor

Adrian Pisco - Chilete DevPath.
