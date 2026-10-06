# Hito 5: Recursos

Estado: implementado y aprobado para cierre local.

## Alcance

- Biblioteca inspirada en recursos-v1: hero con imagen existente, ciclo de estudio,
  catalogo compacto con busqueda y filtros, y formulario de propuestas conservado.
- ES/EN comparten ResourceLibrary; los datos mantienen su fuente en recursos.js.
- Conteos de colecciones, no de ejercicios ni de dominio del estudiante.
- Enlaces al repositorio completo se identifican como Ver Aprendizaje, sin prometer
  un archivo concreto. Se mantienen los estados existentes, incluido Planificado.
- No se agrega contenido referencial del prototipo, dependencias ni SVG.

## Pruebas

- Build correcto: 28 paginas. node --check y git diff --check correctos.
- Navegador a 320, 768 y 1440 px: sin desbordamientos; imagen cargada.
- ES/EN y claro/oscuro revisados.
- Busqueda logica encuentra una coleccion; termino inexistente muestra cero resultados.
- Filtros y busqueda se combinan; Guides funciona con Enter en ingles.
- Formulario conserva action, contexto, idioma y siete campos obligatorios.
- CSS respeta movimiento reducido; animacion de entrada y transiciones de filtrado.

## Limites

No se envio correo durante las pruebas. La copia local muestra Turnstile pendiente
de clave; entrega, verificacion y proteccion en produccion se validan en el hito
final de despliegue. Los enlaces generales a Aprendizaje requieren un futuro
inventario por tema antes de convertir esta biblioteca en un catalogo de practicas.

Hito aprobado para commit local. Sin push hasta el cierre autorizado de la migracion.
