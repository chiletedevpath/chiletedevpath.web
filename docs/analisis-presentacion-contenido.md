# Propuesta de presentación tecnológica para Chilete DevPath

Fecha: 13 de octubre de 2026. Análisis para una mejora futura; no implementa un rediseño.

La portada del portafolio independiente funciona como referencia de composición, tipografía, contraste y personalidad. Para la plataforma, esas técnicas deben ayudar a entender y explorar el contenido. No se propone incorporar una bienvenida ni una pantalla de carga.

## Qué se puede reutilizar

El efecto visual se construyó con Astro, CSS, SVG y JavaScript: degradados, rejillas discretas, terreno vectorial, trazado de rutas, transiciones y controles interactivos. La plataforma ya utiliza Astro; no necesita cambiar de framework para conseguir una presentación más cuidada.

Conviene trasladar el lenguaje de composición y los componentes útiles, manteniendo una identidad propia para Chilete DevPath. La paleta verde actual puede recibir acentos tecnológicos y mejor contraste sin convertirse en una copia del portafolio azul.

## Aplicación por sección

| Sección | Propuesta | Qué aporta al visitante |
| --- | --- | --- |
| Portada | Composición más clara, un motivo vectorial de conexiones y dos acciones principales: explorar rutas y practicar. | Comprender rápidamente para qué sirve la plataforma y por dónde empezar. |
| Rutas | Un mapa de módulos con conexiones legibles, estados documentados y detalle al seleccionar una etapa. Mantener una vista de lista accesible. | Entender orden, relación y alcance de lo publicado. |
| Recursos | Tarjetas con mejor jerarquía, etiquetas útiles y una vista de práctica que conecte instrucciones, ejemplo y resultado. Aprovechar los filtros y vistas ya existentes. | Encontrar material y practicar con menos saltos entre pantallas. |
| Proyectos | Vistas centradas en problema, evidencia y decisiones, con diagramas de arquitectura y capturas identificadas. | Evaluar qué demuestra cada proyecto. |
| Criterios | Resúmenes claros y navegación por temas antes de entrar a las políticas completas. | Encontrar una regla sin tener que leer todos los documentos. |

## Prioridades de implementación

1. Ajustar tipografía, espaciado, contraste y jerarquía de la portada. La primera mejora debe ser visible sin añadir nuevas funciones.
2. Diseñar un único componente de tarjeta reutilizable para recursos y evidencia, con variantes según su propósito.
3. Preparar el mapa de rutas y su alternativa en lista, usando los datos actuales de módulos.
4. Mejorar un recorrido completo de recursos: encontrar una práctica, abrirla, entenderla y volver al catálogo.
5. Incorporar movimiento discreto donde explique relaciones o confirme una acción.

## Archivos que habría que revisar

- `src/components/Hero.astro` y `HomeEditorial.astro`: portada y secuencia de contenido.
- `src/components/RouteDirectory.astro`, `LearningDetail.astro` y `src/data/ruta.js`: navegación y contenido de las rutas.
- `src/components/ResourceLibrary.astro` y `src/scripts/main.js`: biblioteca y filtros existentes. La propuesta de vistas separadas fue retirada.
- `src/components/ProjectExplorer.astro`: presentación de evidencia.
- `src/styles/core/tokens.css` y estilos de cada sección: identidad y consistencia.

La revisión debe considerar los cambios locales de recursos, prácticas y sesión del visitante que ya estaban presentes. Este análisis no autoriza reemplazarlos ni mezclarlos con el diseño del portafolio.

## Criterios para evaluar el resultado

La mejora debe facilitar encontrar contenido y entender el siguiente paso, funcionar en móvil y con teclado, conservar contraste en ambos temas y respetar movimiento reducido. Los diagramas deben describir relaciones reales. Los estados de disponibilidad deben salir de los datos existentes; no mostrar progreso personal ficticio ni cifras decorativas.

Probar primero una portada y un recorrido de recursos. Extender el diseño al resto de la plataforma solo después de revisar esa experiencia. Mantener rápidos el acceso al contenido y la carga inicial, sin efectos que bloqueen la navegación.
