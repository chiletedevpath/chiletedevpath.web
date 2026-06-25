# Chilete DevPath Web

Web oficial de Chilete DevPath, marca personal de Adrian Pisco para documentar aprendizaje, proyectos, criterio tecnico y comunidad.

Sitio publicado:

https://chiletedevpath.github.io/

## Objetivo

Presentar Chilete DevPath como una experiencia navegable de aprendizaje: una marca personal con origen, ruta tecnica, proyectos con contexto, recursos, criterios de publicacion responsable y canales de comunidad.

La web funciona como punto de entrada mas claro que un repositorio para personas que quieran aprender, revisar avance real o seguir el proyecto.

## Version actual

`V3.1 | Publicacion segura y PWA base`

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

Esta version agrega una base PWA, metadatos sociales completos, archivos de descubrimiento publico y una portada optimizada para compartir la web en redes.

## Tecnologias

- Astro
- HTML
- CSS
- JavaScript
- SVG propio
- PWA base
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
|   |-- layouts/
|   |-- pages/
|   |-- scripts/
|   `-- styles/
|-- .github/
|   `-- workflows/
|-- astro.config.mjs
|-- package.json
|-- README.md
`-- CHANGELOG.md
```

## Alcance de V3.1

- Manifest PWA con iconos propios de Chilete DevPath.
- Service worker basico para cache de paginas y assets principales.
- Portada social `og-image.jpg` optimizada para WhatsApp, LinkedIn y redes sociales.
- Metadatos Open Graph y Twitter ampliados con dimensiones, tipo y texto alternativo.
- Archivos `robots.txt`, `sitemap.xml` y `security.txt`.
- Version visible, metadata y paquete actualizados a V3.1.

## Decisiones de diseno

- Identidad visual inspirada en Chilete, Cajamarca, sin usar simbolos institucionales como marca propia.
- Paleta basada en azul profundo, verde tecnico, camino dorado y acentos sobrios.
- Paleta preparada para modo claro y modo oscuro.
- Ruta presentada como avance progresivo, con practica y evidencia esperada.
- Navegacion pensada para comunidad, no solo para mostrar repositorios.
- Separacion entre aprendizaje, evidencia academica, portafolio futuro y criterios de publicacion segura.
- La PWA es basica: permite instalacion y cache inicial, pero no reemplaza una auditoria avanzada de aplicacion con backend.

## Validacion realizada

- Ejecucion de `npm audit`.
- Ejecucion de `npm run build`.
- Generacion de 7 paginas estaticas.
- Revision visual en movil, tablet, escritorio y pantalla amplia.
- Verificacion de ausencia de desbordes horizontales en breakpoints principales.

## Criterio editorial

El contenido debe mantenerse alineado con las politicas de Chilete DevPath: autoria clara, uso responsable de IA, publicacion segura y bienestar en el aprendizaje tecnico.

## Autor

Adrian Pisco - Chilete DevPath.
