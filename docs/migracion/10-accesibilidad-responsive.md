# Accesibilidad y responsive

## Ajustes

- Revelado general e Inicio con umbral cero para elementos altos.
- Contenido visible al recibir foco de teclado.
- Cambios de preferencia de movimiento revelan contenido pendiente.
- Movimiento reducido sin demoras de animacion ni transicion.
- Ajustes de contraste de Inicio y foco compartido conservados.

## Comprobaciones del 2026-10-07

- Build, sintaxis de main.js y diff --check correctos.
- 88 modulos comprobados: maximo 937 lineas.
- Inicio a 320 px sin desbordamiento horizontal.
- Menu movil abre con Enter, cierra con Escape y devuelve foco al boton.
- Enlace a rutas revela la seccion en movil.
- Ruta, Proyectos y Recursos sin desbordamiento a 320, 768 y 1440 px.

## Limites

## Revision adicional

Se midieron Inicio, Ruta, Proyectos y Recursos en ES/EN y ambos temas.
Los textos sobre fondos solidos medibles pasan 4.5:1 o 3:1 para texto grande.
Se corrigieron botones nocturnos, salto al contenido y acentos claros de Ruta.
Fondos con imagen, gradientes o transparencia quedaron fuera de esa medicion.
El explorador incorpora Home/End, comprobados en ambos idiomas; Tab permite
salir de la lista hacia el panel. El foco conserva contorno visible.

Recorrido adicional con Tab hasta salir del documento: Inicio 49 pasos,
Ruta 39 y Proyectos 40, en ES/EN. Sin foco oculto ni contorno ausente.
Menus anidados moviles abren con Enter y cierran con Escape en ES/EN,
devolviendo foco al disparador. En Recursos los campos tienen etiquetas,
el honeypot queda fuera de Tab y el boton es submit. El recorrido automatico
no pudo completarse; no se resolvio Turnstile ni se envio el formulario.
La preferencia reducida seguia desactivada durante la ultima comprobacion.

Heroes de Ruta, Proyectos, Recursos, Sobre y Criterios alineados mediante
hero-rhythm.css: titulo 64/52/38.4 px en escritorio/tablet/movil, espaciado
72/48 px y ancho de titulo limitado a 850 px. Inicio conserva protagonismo.
Comprobadas las diez versiones ES/EN a 320/768/1440 px sin desbordamiento.
En Recursos ES, Tab recorre nombre, correo, asunto, tema, tipo, motivo y
confirmacion en orden, con contorno visible. La verificacion externa requiere
prueba manual y no se incluye como comprobacion terminada.

## Pendiente de prueba manual

Limpieza posterior: retiradas las cinco portadas v2 descartadas y sus cinco
copias de propuesta, sin referencias en src/public. Se conservan portadas
v3 aprobadas y las imagenes originales que siguen en uso.
Comprobaciones finales: modules:check (91 archivos, maximo 937 lineas),
data:check, data:typecheck, worker:test (7 pruebas), build (26 paginas)
y pwa:check (3 iconos, 32 rutas de precarga) correctos.
Las pruebas del Worker no sustituyen una prueba manual del widget externo.

Revision posterior a la aprobacion de portadas: 60 combinaciones de las
cinco secciones, ES/EN, ambos temas y 320/768/1440 px. Sin desbordamiento,
imagenes cargadas y titulos dentro del viewport. Captura de Sobre movil
revisada tras finalizar su animacion de entrada.
El foco llega al contenedor externo de verificacion desde el consentimiento;
su interior no es accesible con los selectores de la herramienta. No se
resolvio el desafio ni se envio un mensaje en esta revision.

La preferencia del navegador estaba en movimiento normal. La regla reducida
se reviso en codigo, pero falta prueba con esa preferencia activa.
Estas comprobaciones no equivalen a una certificacion WCAG ni a una auditoria
completa con lector de pantalla. Faltan contraste sobre fondos complejos,
recorrido exhaustivo de teclado y prueba de movimiento reducido activo.
Cambios pendientes de aprobacion; sin commit ni push de este hito.
