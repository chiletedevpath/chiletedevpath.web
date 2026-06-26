# Historial de versiones

Registro de versiones publicadas de la web oficial de Chilete DevPath.

## V4.4

- Fecha de cierre: 26/06/2026
- Estado: en revision
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Configuracion del numero real de WhatsApp para contacto directo.
- Reemplazo de formularios `mailto` por paneles de contacto que preparan mensajes por WhatsApp o correo.
- Ajuste de mensajes publicos para evitar frases defensivas o poco confiables.
- Retiro de leyendas superpuestas sobre SVG en heroes internos.
- Mejora de la pagina Sobre para explicar mejor que es Chilete DevPath.
- Rediseño de la plantilla de politicas internas con formato formal: encabezado, objetivo, alcance, responsabilidades, lineamientos y control de version.
- Ajuste del boton de retorno en politicas para indicar claramente que permite regresar a la lista.
- Footer bilingue segun ruta en espanol o ingles.

### Criterio de cierre

La V4.4 corrige puntos de confianza y presentacion detectados en revision visual: formularios, mensajes, SVG, politicas y footer.

## V4.3

- Fecha de cierre: 26/06/2026
- Estado: en revision
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Incorporacion de boton flotante de WhatsApp con mensaje predeterminado.
- Incorporacion de formularios estaticos para contacto, recursos y feedback.
- Creacion de seccion "Por que Chilete DevPath" con propuesta de valor.
- Incorporacion de metricas estaticas del ecosistema sin simular usuarios.
- Creacion de rutas internas para politicas de publicacion.
- Activacion de rutas inglesas reales para las secciones principales.
- Simplificacion del boton dia/noche a icono accesible.
- Reorganizacion del footer con enlaces rapidos, politicas, redes y version.
- Remodelacion de la pagina Sobre para explicar Chilete DevPath como marca.
- Rediseño de visuales SVG para Ruta, Proyectos, Recursos, Criterios, Comunidad y Sobre.

### Criterio de cierre

La V4.3 mejora contacto, confianza, navegacion, criterio legal/editorial y lectura de marca sin introducir backend, cuentas ni comentarios publicos inseguros.

## V4.2

- Fecha de cierre: 25/06/2026
- Estado: en revision
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Reemplazo de portadas SVG confusas por imagenes propias para areas y proyectos.
- Presentacion de proyectos academicos con porcentaje de avance visible.
- Incorporacion de `Ferreteria Soto DB` y `Ferreteria Sys Patrones` sin incluir proyectos La Lucha.
- Retiro de mensajes internos que no aportaban al usuario final, como notas sobre portadas o sensibilidad.
- Reenfoque de la pagina Sobre para explicar Chilete DevPath como marca, ruta y criterio de publicacion.
- Eliminacion de la miga de pan visible en Criterios para evitar doble enlace a Inicio.
- Reemplazo del visual abstracto de Criterios por un resumen claro de revision previa a publicar.
- Ocultamiento del idioma ingles hasta que exista una version traducida real.
- Ajuste de paleta para mejorar contraste y preparar mejor los modos dia y noche.

### Criterio de cierre

La V4.2 corrige comunicacion visual, navegacion y consistencia editorial. La web deja de mostrar controles o imagenes que no explican su funcion y alinea Academia con evidencia academica revisada.

## V4.1

- Fecha de cierre: 25/06/2026
- Estado: en revisión
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Incorporación de portadas SVG propias para las cards principales de Proyectos.
- Creación de portada segura para `Clinica Salud Vital` sin datos personales, marcas institucionales ni pantallas sensibles.
- Actualización de la Clínica como evidencia académica terminada, sin presentarla aún como portafolio final.
- Ajuste de `ProjectCard` para usar imagen real cuando el proyecto tenga portada definida.
- Retiro de la foto editorial del hero de Proyectos para mantener coherencia visual mientras se trabaja un sistema fotográfico propio.
- Limpieza del archivo de la página Proyectos para retirar caracteres dañados visibles en el contenido editado.

### Criterio de cierre

La V4.1 mejora el sistema visual de proyectos sin depender de fotografías improvisadas ni de imágenes con riesgo legal. Las portadas son propias, editables y coherentes con el enfoque de marca.

## V4.0

- Fecha de cierre: 25/06/2026
- Estado: en revisión
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Inicio de migración estructural para evitar que la web siga creciendo sobre un CSS global de miles de líneas.
- División de estilos por responsabilidad: `core`, `components` y `pages`.
- Reducción de `global.css` a un archivo de entrada con imports ordenados.
- Simplificación del menú principal: Inicio, Ruta, Proyectos y Comunidad.
- Agrupación de secciones secundarias en el menú `Más`: Sobre, Recursos y Criterios.
- Preparación del selector de idioma `ES / EN` sin crear rutas rotas para contenido aún no traducido.
- Creación de componente `Breadcrumb` para evitar migas de pan escritas manualmente y dobles enlaces inconsistentes.

### Criterio de cierre

La V4.0 se considera una versión de arquitectura base. Su objetivo es sanear estructura, navegación y escalabilidad antes de rediseñar imágenes, cards y heroes con mayor nivel visual.

## V3.7

- Fecha de cierre: 25/06/2026
- Estado: en revisión
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Reversión del intento visual V3.6 para recuperar la base estable de la web.
- Incorporación de React como isla de interacción para la navegación principal.
- Incorporación de Tailwind CSS como base técnica para futuros componentes consistentes.
- Incorporación de `lucide-react` para iconografía real en controles y acciones.
- Separación de la lógica del header respecto al script global de animaciones.
- Mejora del header con CTA a GitHub, control de tema y menú móvil manejados desde un componente dedicado.
- Actualización del sistema tipográfico a una base con mayor personalidad de marca: Fraunces, Outfit y Geist Mono.

### Criterio de cierre

La V3.7 queda en revisión porque su objetivo no es cerrar un rediseño visual completo, sino preparar una arquitectura frontal más limpia para rediseñar secciones sin duplicar lógica ni romper la navegación.

## V3.5

- Fecha de cierre: 25/06/2026
- Estado: en revisión
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Asignación de fotografías por intención de sección: Inicio, Sobre y Proyectos.
- Integración de imagen hero realista en Inicio con espacio visual para el mensaje principal.
- Reemplazo del retrato anterior de Sobre por una imagen principal más coherente con rostro, cuerpo y proporciones.
- Incorporación de imagen de proceso en Sobre para reforzar práctica, documentación y aprendizaje real.
- Reemplazo del visual de Proyectos por una imagen de evidencia técnica menos artificial.
- Exclusión de imagen conceptual de origen para evitar presentarla como fotografía documental de Chilete.

### Criterio de cierre

La V3.5 se considera en revisión hasta validar que cada fotografía aporte a su sección sin parecer montaje, sin exponer datos sensibles y sin desplazar el sistema visual de Ruta, Recursos, Criterios y Comunidad.

## V3.4

- Fecha de cierre: 25/06/2026
- Estado: en revisión
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Generación de dos imágenes editoriales basadas en fotografías propias de Adrian Pisco.
- Sustitución de la imagen temporal de Proyectos por un visual tipo dashboard profesional sin pantallas sensibles ni marcas laborales.
- Incorporación de retrato editorial en la página Sobre para reemplazar el placeholder de fotografía pendiente.
- Corrección de textos visibles en Proyectos y Sobre con tildes y redacción de marca.
- Eliminación de la foto temporal sanitizada que ya no aportaba al sistema visual.

### Criterio de cierre

La V3.4 se considera en revisión hasta validar visualmente que las imágenes editoriales mantengan identidad, realismo y coherencia con la marca en escritorio y móvil.

## V3.3

- Fecha de cierre: 25/06/2026
- Estado: en revisión
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Rediseño de la página Criterios para comunicar marca, responsabilidad editorial y publicación segura con mayor jerarquía visual.
- Reemplazo del uso repetido del logo por iconos SVG propios y acentos diferenciados para cada política.
- Reorganización de las tarjetas de políticas para destacar objetivo, criterio principal, metadatos colapsables y CTA visible.
- Incorporación de una fotografía propia sanitizada como visual editorial en la página Proyectos.
- Mejora del footer como punto de conversión hacia Discord y redes oficiales.
- Limpieza de textos visibles con tildes y corrección de caracteres dañados en header, footer y control de tema.

### Criterio de cierre

La V3.3 se considera en revisión hasta validar visualmente que las fotografías, el rediseño de Criterios y el footer mantengan coherencia en escritorio y móvil sin exponer información sensible.

## V3.2

- Fecha de cierre: 25/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Eliminacion de la seccion duplicada de entradas directas en la pagina Ruta.
- Conversion de los temas de la ruta en accesos directos a modulos reales del ecosistema.
- Correccion del enlace de Git, GitHub y documentacion tecnica hacia el repositorio de marca y documentos.
- Mejora de la seccion de tecnologias con iconos SVG locales y descripcion tecnica breve.
- Ajuste de la pagina Sobre para retirar el visual generico y preparar una composicion tipo aura alrededor de una futura fotografia profesional.

### Criterio de cierre

La V3.2 se considera cerrada porque reduce redundancia, mejora navegacion real hacia GitHub y deja la identidad personal mejor preparada sin usar fotografias pendientes ni imagenes generadas.

## V3.1

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Creacion de `manifest.webmanifest` para instalacion basica como PWA.
- Registro de `sw.js` para cache inicial de paginas y assets principales.
- Generacion de iconos PWA `192x192`, `512x512` y `apple-touch-icon`.
- Generacion de `og-image.jpg` en formato `1200x630` para compartir en WhatsApp y redes.
- Ampliacion de metadatos Open Graph y Twitter con dimensiones, tipo y texto alternativo.
- Incorporacion de `robots.txt`, `sitemap.xml` y `security.txt`.
- Revision de secretos, datos sensibles y referencias restringidas antes de publicar.

### Criterio de cierre

La V3.1 se considera cerrada porque la web mejora su presentacion publica, queda preparada para instalacion basica y reduce riesgos editoriales al compartir el sitio fuera de GitHub.

## V3.0 | Sistema visual y tema adaptable

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Incorporacion de modo dia/noche con preferencia persistente en el navegador.
- Creacion de visuales SVG propios para representar ruta, proyectos, recursos, criterios, comunidad y origen.
- Reemplazo de placeholders visuales genericos por un sistema grafico reutilizable.
- Ajuste del header para incluir control de tema sin perder navegacion responsive.
- Actualizacion de version visible, README y metadatos tecnicos a V3.0.
- Validacion de que la web siga sin usar logos institucionales, datos sensibles o referencias a proyectos restringidos.

### Criterio de cierre

La V3.0 se considera cerrada porque la web deja de depender de imagenes pendientes o generadas por IA para explicar la marca. Chilete DevPath queda con un sistema visual propio, adaptable y preparado para crecer hacia interactividad avanzada.

## V2.4 | Experiencia educativa y marca

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Rediseño del inicio para reducir repeticion y orientar al usuario hacia aprender, practicar y revisar evidencias.
- Creacion de heroes internos diferenciados para Ruta, Proyectos, Recursos, Criterios, Comunidad y Sobre.
- Incorporacion de espacios visuales reservados para fotografias y portadas futuras sin usar imagenes generadas todavia.
- Mejora de tarjetas de proyectos con franja visual reservada para portadas propias.
- Limpieza de textos globales con caracteres dañados y actualizacion de version visible.
- Ajustes responsive para que los nuevos bloques funcionen en movil, tablet, escritorio y pantallas amplias.

### Criterio de cierre

La V2.4 se considera cerrada porque la web deja de sentirse como directorio y empieza a funcionar como experiencia de aprendizaje y marca, manteniendo criterios legales y editoriales.

## V2.3 | Proyectos academicos en revision

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Incorporacion de una seccion para proyectos academicos en revision dentro de la pagina Proyectos.
- Vinculacion de `utp-clinica-salud-vital` como avance tecnico en proceso, sin presentarlo como portafolio final.
- Separacion entre evidencia academica, proyectos en proceso y seleccion futura de portafolio.
- Alineacion con la matriz de publicacion segura para evitar promocionar proyectos sensibles o no cerrados.

### Criterio de cierre

La V2.3 se considera cerrada porque permite conectar GitHub con la web sin romper el criterio legal/editorial: un proyecto en proceso puede mostrarse como avance, pero no como proyecto final destacado.

## V2.2 | Ruta interactiva y contenido conectado

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Conexion de la ruta de aprendizaje con secciones reales del repositorio `aprendizaje`.
- Incorporacion de estados para distinguir contenido disponible, en crecimiento, en revision y en construccion.
- Reorganizacion de Recursos por utilidad para la comunidad.
- Rediseño de Criterios como documentos de politica con encabezado de marca y datos de control.
- Ajuste de paleta hacia una identidad mas sobria y profesional.
- Conservacion de la fotografia actual hasta contar con una nueva foto real aprobada.

### Criterio de cierre

La V2.2 se considera cerrada porque la web empieza a funcionar como una ruta navegable y no solo como presentacion de marca. El contenido queda mas conectado, verificable y alineado con publicacion segura.

## V2.1 | Identidad profesional expandida

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Incorporación de una sección personal con fotografía de Adrián Pisco.
- Uso de una imagen de trabajo para reforzar la construcción real de la marca.
- Mejora de redes sociales con iconografía y descripciones por canal.
- Rediseño del footer para funcionar como cierre de marca.
- Actualización de la versión visible y documentación del proyecto.

### Criterio de cierre

La V2.1 se considera cerrada porque fortalece la presencia profesional de Chilete DevPath sin romper la arquitectura multipágina de V2.0. La web comunica mejor la relación entre marca, persona, ruta técnica y comunidad.

## V2.0 | Ecosistema navegable

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Migración de la web desde una landing HTML estática hacia Astro.
- Creación de una estructura multipágina para Inicio, Sobre, Ruta, Proyectos, Recursos, Criterios y Comunidad.
- Separación de contenido en archivos de datos para facilitar mantenimiento.
- Creación de componentes reutilizables para navegación, hero, tarjetas, ruta, secciones y pie de página.
- Preparación del despliegue mediante GitHub Actions y GitHub Pages.
- Conservación de la identidad visual ajustada en V1.3.1.
- Actualización del README como ficha técnica de la versión vigente.

### Criterio de cierre

La V2.0 se considera cerrada porque la web deja de ser solo una portada y pasa a funcionar como ecosistema navegable de la marca. La estructura permite crecer por secciones sin romper el enfoque de Chilete DevPath.

## V1.3.1 | Identidad ajustada

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Ajuste del panel visual del hero para integrarlo como franja inferior de identidad.
- Eliminación del efecto de bloque superpuesto que tapaba parte del banner.
- Cambio del concepto "Camino" por "Ruta" para alinearlo con la ruta de aprendizaje.
- Mejora de la distribución visual de origen, ruta y construcción.
- Actualización de la versión visible en el footer.

### Criterio de cierre

La V1.3.1 se considera cerrada porque corrige el bloque visual de identidad del hero sin abrir una nueva etapa mayor. La mejora conserva el enfoque de Chilete DevPath y prepara la web para una futura planificación V2.0.

## V1.3 | Identidad viva

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Refuerzo del mensaje principal del hero.
- Mejora de la primera impresión visual de la marca.
- Incorporación de una capa de identidad sobre origen, camino y construcción.
- Mejora de tarjetas de proyectos con detalles de valor para comunidad.
- Reordenamiento de canales de contacto según prioridad estratégica.
- Actualización de la versión visible en el footer.
- Actualización del README como ficha técnica de la versión vigente.

### Criterio de cierre

La V1.3 se considera cerrada porque la web comunica con mayor claridad que Chilete DevPath no es solo una lista de repositorios, sino una marca personal con origen, ruta técnica, proyectos y comunidad.

## V1.2 | Ruta visible

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Mejora de la sección de ruta de aprendizaje.
- Incorporación de una intención clara por cada etapa.
- Agregado de resultados esperados por tramo de aprendizaje.
- Inclusión de una llamada directa al repositorio `aprendizaje`.
- Refuerzo de la ruta como material útil para comunidad, no solo como listado de temas.
- Actualización de la versión visible en el footer.
- Actualización del README como ficha técnica de la versión vigente.

### Criterio de cierre

La V1.2 se considera cerrada porque la ruta de aprendizaje comunica mejor qué se trabaja, para qué sirve cada etapa y qué evidencia puede esperar la comunidad al recorrer Chilete DevPath.

## V1.1 | Camino afinado

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Mejora de metadatos SEO y Open Graph para publicación social.
- Incorporación de URL canónica del sitio.
- Uso de imagen social absoluta para mejorar compatibilidad al compartir enlaces.
- Inclusión de metadatos Twitter Card.
- Declaración de dimensiones de imágenes para reducir saltos visuales durante la carga.
- Ajuste responsive de la navegación en tablet y móvil.
- Mejora de accesibilidad del enlace activo del menú mediante `aria-current`.
- Actualización de la versión visible en el footer.
- Actualización del README como ficha técnica de la versión vigente.

### Criterio de cierre

La V1.1 se considera cerrada porque afina la primera publicación pública sin cambiar la estructura principal de la web. Su objetivo fue fortalecer producción, accesibilidad, SEO social y mantenimiento antes de planificar nuevas mejoras de contenido.

## V1.0 | Camino inicial

- Fecha de cierre: 24/06/2026
- Estado: cerrada y publicada
- Sitio: https://chiletedevpath.github.io/

### Alcance

- Primera versión pública de la web oficial de Chilete DevPath.
- Presentación de la marca personal de Adrián Pisco.
- Ruta de aprendizaje organizada por etapas.
- Enlaces a repositorios principales del ecosistema.
- Criterios de publicación responsable.
- Canales de comunidad y redes sociales.
- Diseño responsive base para escritorio, tablet y móvil.
- Animaciones iniciales con JavaScript nativo.
- Publicación mediante GitHub Pages.

### Criterio de cierre

La V1.0 se considera cerrada porque la web ya está publicada, tiene una identidad visual base, comunica el propósito de Chilete DevPath y permite acceder a la ruta, proyectos, criterios y canales principales de la marca.
