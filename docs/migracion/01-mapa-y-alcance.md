# Hito 1: mapa y alcance de la migracion

Fecha de inventario: 2026-10-06.
Estado: inventario verificado; decisiones propuestas para revision.

Este documento define destinos y responsabilidades. No autoriza eliminar paginas,
renombrar URLs ni publicar cambios. Los prototipos orientan el diseno, no sustituyen
las fuentes de contenido.

## Linea base

- Siete paginas principales por idioma: Inicio, Ruta, Proyectos, Recursos, Sobre,
  Criterios y Comunidad.
- Un indice de politicas y cuatro documentos por idioma.
- Total: 24 paginas publicas, 12 en espanol y 12 en ingles.
- Seis prototipos: inicio-v13, rutas-v1, proyectos-v3, recursos-v1,
  criterio-v3 y sobre-v2, dentro de `../prototipos/`.
- `src/pages/sw.js.ts` genera un recurso tecnico, no una seccion editorial.
- `src/pages/qa-rutas/[size].astro` solo genera pruebas con `CDP_ROUTE_QA=1`.
  No pertenece a la navegacion ni al build normal.
- Inicio y Ruta tienen avances locales, no aprobacion final de migracion.
- No existe una pagina web de Academia ni un portafolio independiente en
  `src/pages`. No se registran como secciones actuales.

## Matriz de decisiones

Las URLs inglesas conservan el prefijo `/en/` y los mismos slugs.

| Seccion y URL actual | Prototipo | Decision propuesta | Funcion y alcance |
| --- | --- | --- | --- |
| Inicio `/` | inicio-v13 | Conservar y cerrar composicion | Presentar identidad, orientar y seleccionar evidencias. No duplicar el catalogo de rutas. |
| Rutas `/ruta/` | rutas-v1 | Conservar y completar explorador | Buscar, comparar objetivos y elegir recorrido. Resumen compacto, detalle progresivo y paginacion. |
| Proyectos `/proyectos/` | proyectos-v3 | Migrar | Mostrar proyectos con contexto y acceso a su evidencia. Mantener explorador escalable, sin paginas duplicadas de caso tecnico no solicitadas. |
| Recursos `/recursos/` | recursos-v1 | Migrar | Encontrar materiales por tema, tipo y recorrido. No repetir todos los contenidos del repositorio. |
| Sobre `/sobre/` | sobre-v2 | Migrar | Explicar origen, autor y proposito, con atribucion verificable. |
| Criterios `/criterios/` | criterio-v3 | Migrar | Explicar principios de publicacion y conectar con documentos completos. |
| Comunidad `/comunidad/` | No existe | Conservar y adaptar | Canales oficiales y recepcion de aportes. No reducir a enlaces del footer mientras conserve estas funciones. |
| Indice `/politicas/` | No existe | Conservar como pagina auxiliar | Acceso directo a documentos. Puede compartir datos con Criterios sin duplicar su narrativa. |
| `/politicas/politica-editorial/` | No existe | Conservar y adaptar estilos | Documento editorial completo. |
| `/politicas/uso-responsable-ia/` | No existe | Conservar y adaptar estilos | Documento de uso de IA completo. |
| `/politicas/bienestar-tecnico/` | No existe | Conservar y adaptar estilos | Documento de bienestar completo. |
| `/politicas/publicacion-segura/` | No existe | Conservar y adaptar estilos | Documento de publicacion segura completo. |

No se propone retirar ninguna URL publica en este hito. Si mas adelante se fusiona
una pagina, se requiere inventario de enlaces entrantes y una redireccion comprobada.
No cambiar `/ruta/` a `/rutas/` solo porque el titulo visible este en plural.

## Paginas educativas nuevas

Destinos propuestos, todavia no implementados ni publicados:

- `/ruta/[ruta-id]/`: objetivo, requisitos, fases, modulos y evidencias del recorrido.
- `/ruta/[ruta-id]/[modulo-id]/`: objetivos, requisitos, contenidos disponibles,
  practica, criterios de comprobacion y proyectos relacionados.
- Equivalentes ingleses bajo `/en/`.

Primero se valida una ruta y un modulo con contenido real. No generar decenas de
paginas vacias ni convertir READMEs enteros en modales. El resumen desplegable del
directorio no equivale a una pagina educativa terminada.

## Navegacion propuesta

- Principal: Inicio, Rutas, Proyectos y Recursos.
- Menu secundario: Sobre, Criterios y Comunidad.
- Footer: navegacion completa, indice de politicas, documentos y canales oficiales.
- Ruta hacia modulo; modulo hacia practica en Aprendizaje y evidencia en Academia.
- Proyectos hacia su fuente de Academia, sin cambiar ubicaciones de repositorios.

Mantener acceso por teclado, idioma, tema y enlaces directos en todas las secciones.
No incorporar login, certificados, foro o progreso de usuario como parte de esta
migracion sin definir antes su necesidad y tratamiento de datos.

## Fuentes y limites

- Aprendizaje: contenidos progresivos, practicas y orden pedagogico.
- Academia: trabajos academicos y evidencias fuente de proyectos.
- Datos web: identificadores estables, traducciones y referencias a esas fuentes.
- Prototipos: composicion e interacciones; textos y metricas referenciales se validan.
- Fotografias: verificar procedencia, permiso y representacion; no declarar una
  imagen ilustrativa como fotografia real de Chilete.
- Tecnologias: decidir por necesidad, accesibilidad, mantenimiento y coste de carga.
  Este hito no requiere instalar frameworks ni servicios.

## Orden de ejecucion y aprobaciones

1. Aprobar esta matriz y mapa de navegacion.
2. Cerrar Inicio y Ruta con revision visual, ES/EN, temas, teclado y enlaces por ancla.
3. Modelar y validar una ruta y un modulo reales.
4. Migrar Proyectos, Recursos, Criterios y Sobre, en bloques separados.
5. Adaptar Comunidad y Politicas al sistema compartido sin perder formularios ni documentos.
6. Validar URLs, SEO, recursos, rendimiento, seguridad y despliegue.

Cada bloque debe registrar archivos afectados, pruebas y pendientes. Commit y push
requieren autorizacion; no mezclar contenido academico ni eliminaciones locales
ajenas con cambios de interfaz.

## Cierre del hito

Inventario y diferencias documentados. No se modificaron paginas ni navegacion como
parte de este hito. La siguiente aprobacion es el mapa final; despues corresponde
cerrar las composiciones de Inicio y Ruta, no saltar directamente a otra seccion.
