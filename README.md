# Chilete DevPath Web

Web oficial de Chilete DevPath, proyecto de Adrian Pisco para documentar aprendizaje de tecnologias, proyectos y criterio tecnico.

Sitio publicado:

https://chiletedevpath.com/

## Objetivo

Presentar rutas de aprendizaje independientes, proyectos con contexto, recursos y criterios de publicacion responsable. Software y productividad con datos son las areas publicadas actualmente.

La web funciona como punto de entrada mas claro que un repositorio para personas que quieran aprender, revisar avance real o seguir el proyecto.

## Version actual

`V4.13.0`

- Fecha de revisión: 09/10/2026
- Estado: publicada; GitHub Pages y contacto verificados el 09/10/2026
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

- Directorio de dos rutas: software (doce modulos) y productividad con datos (diez modulos), con estados y metricas derivados de los datos.
- Catalogo de nueve proyectos con identidad estable, filtros derivados y portadas panoramicas. Los destinos de Academia se comprobaron localmente; eso no garantiza disponibilidad remota.
- Páginas completas en español e inglés, con modo claro y oscuro y navegación adaptable.
- CSS organizado por núcleo, componentes y páginas, con carga específica según el contenido utilizado.
- Formularios semánticos protegidos con Turnstile y un Worker que valida, limita y entrega los mensajes a EmailJS.
- Metadatos SEO por página, `hreflang`, Open Graph bilingüe y datos estructurados de `WebSite` y `Person`.
- PWA controlada con caché versionada, fallback offline ES/EN y precarga tolerante de páginas y recursos locales.
- Sitemap generado automáticamente desde las rutas de Astro.
- Políticas editoriales, de seguridad, bienestar y uso responsable de IA.

## Decisiones de diseno

- Identidad visual inspirada en Chilete, Cajamarca, sin usar simbolos institucionales como marca propia.
- Paleta de verde profundo, turquesa, superficies claras y acentos secundarios contenidos.
- Paleta preparada para modo claro y modo oscuro.
- Ruta presentada como avance progresivo, con practica y evidencia esperada.
- Navegacion centrada en Inicio, Rutas, Recursos y Proyectos; Sobre y Criterios en el menu secundario. Redes y contacto permanecen en el footer, sin modulo de Comunidad.
- Heroes compartidos en ritmo y tipografia, con imagenes tecnologicas propias por seccion. Las imagenes generadas son ilustraciones, no evidencia del funcionamiento de los proyectos.
- Separacion entre aprendizaje, evidencia academica, portafolio futuro y criterios de publicacion segura.
- La PWA prioriza consulta offline del contenido público; los formularios y servicios externos continúan requiriendo conexión.

## Validacion realizada

- Build: 26 paginas estaticas. Datos, tipos, tamano de modulos y PWA comprobados.
- Worker: nueve pruebas automatizadas correctas; no sustituyen la prueba del servicio externo.
- Heroes: ES/EN, ambos temas y 320/768/1440 px sin desbordamiento ni imagenes ausentes.
- `npm audit --omit=dev`: sin vulnerabilidades reportadas; no es una auditoria completa de dependencias ni de seguridad.
- Pendientes: movimiento reducido activado, recorrido dentro de Turnstile y contraste sobre imagenes/transparencias. No se declara conformidad WCAG completa.

## Desarrollo y comprobaciones

Requiere Node.js 24 y npm, como el workflow de despliegue.

```sh
npm ci
npm run dev
npm run modules:check
npm run data:check
npm run data:typecheck
npm run worker:test
npm run build
npm run pwa:check
```

`npm run preview` permite revisar el build. La rama de migracion no se publica
automaticamente: el workflow despliega desde `main` o por ejecucion manual.
No hacer push de cierre ni desplegar sin aprobacion del propietario.

## Formularios protegidos

La configuracion utiliza Cloudflare y EmailJS sin contratar servicios de pago. El navegador conoce la clave publica de Turnstile y el endpoint; los secretos pertenecen al Worker. Los limites de los proveedores se consultan en sus paneles y no se prometen envios ilimitados.

Configuración requerida antes de publicar:

1. Verificar el widget existente para `chiletedevpath.com`; no crear otro innecesariamente.
2. `PUBLIC_TURNSTILE_SITE_KEY` puede configurarse en GitHub Actions. `src/data/contact.js` contiene el fallback publico y el endpoint actual.
3. Registrar `TURNSTILE_SECRET` y `EMAILJS_PRIVATE_KEY` como secretos en Cloudflare. `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID` y `EMAILJS_PUBLIC_KEY` son identificadores no secretos configurados en `worker/wrangler.jsonc`.
4. `npm run worker:check` realiza un dry-run. `npm run worker:deploy` publica y solo se ejecuta con autorizacion.
5. El Worker admite el origen de produccion, no localhost. La ausencia de envio en preview local no demuestra un fallo del servicio publicado; no ampliar permisos permanentemente para probarlo.

Una entrega controlada fue confirmada por el propietario. Antes del cierre se
debe verificar el flujo con la compilacion que se publicara. El rate limiter
local aplica tres intentos por minuto por IP, independientemente del correo.
Usuarios de una red compartida comparten esa cuota. No es una cuota diaria
global ni garantia de impedir todo abuso; Turnstile sigue siendo obligatorio.

Los valores locales se toman de `.env` y `worker/.dev.vars`; ambos están excluidos de Git. Los archivos `.env.example` y `worker/.dev.vars.example` solo documentan nombres y no contienen credenciales reales.

## Documentacion de migracion

`docs/migracion/` conserva decisiones y evidencias por hito. Los informes
anteriores son historicos: el estado de cierre vigente se consulta en
`docs/migracion/12-auditoria-final.md`. No confundir un build correcto con
autorizacion de despliegue ni con certificacion de accesibilidad.

## Criterio editorial

El contenido debe mantenerse alineado con las politicas de Chilete DevPath: autoria clara, uso responsable de IA, publicacion segura y bienestar en el aprendizaje tecnico.

## Autor

Adrian Pisco - Chilete DevPath.
