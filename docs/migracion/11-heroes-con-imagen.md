# Heroes con imagen

## Integracion

Cinco portadas raster v3 aprobadas por el propietario, WebP 1600 x 900, integradas mediante
HeroBackdrop.astro. Inicio conserva su portada existente.
Imagenes decorativas con alt vacio: no representan evidencia documental.
Los textos siguen siendo HTML y los enlaces mantienen su funcionamiento.

hero-images.css establece superficie verde profunda, texto claro y turquesa
en ambos temas. El contraste no depende del tema global. En escritorio la
imagen queda a la derecha y el texto a la izquierda con capa de contraste.
En movil la escena ocupa la parte superior; el texto tiene superficie opaca.
Las cifras de Proyectos y enlaces de Criterios pasan a bandas independientes
para evitar texto sobre los elementos principales de sus imagenes.

## Validacion

Build correcto. Carga de imagenes y ausencia de desbordamiento comprobadas
a 320, 768 y 1440 px en las cinco secciones ES, Proyectos EN y Criterios EN.
Capturas de Proyectos revisadas en escritorio y movil. Modo dia conserva
texto claro sobre verde profundo. No equivale a certificacion de accesibilidad.
Portadas aprobadas para commit local. Push reservado al cierre del despliegue.

## Correccion de enfoque v3

Las escenas v2 se sustituyen por espacios de aprendizaje tecnologico:
mapa de modulos, aplicaciones y datos, ejercicios de programacion,
revision de codigo y trabajo tecnico personal. Sin paisajes ni botanica
en pantallas o documentos. Inicio no cambia.
Build y diff --check correctos; las cinco imagenes cargan sin desbordamiento
a 320 y 1440 px. Captura de Criterios revisada en escritorio.
