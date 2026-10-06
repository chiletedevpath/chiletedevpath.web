# Hito 6: Criterios y retiro de Comunidad

Estado: Criterios aprobado para cierre local.

## Cambio de alcance aprobado

Comunidad no tiene aun una funcion real para el proyecto. Se retiran sus paginas,
estilos propios, enlaces de navegacion, datos sociales y precache. El footer deja
de promover redes; conserva GitHub como evidencia tecnica. Las URLs anteriores
redirigen al Inicio de su idioma y se excluyen del sitemap.

Astro genera redireccion HTML en este despliegue estatico, no una respuesta HTTP
301 del servidor. La configuracion del alojamiento se revisa al desplegar.

## Criterios

Se usa criterio-v3 como referencia de composicion, no como fuente de politicas.
CriteriaLanding organiza hero, preguntas y revision; PolicyOverview presenta
las politicas reales de recursos.js con details nativos y anclas directas.
Se mantienen documentos completos, indice de politicas y retorno a lista-politicas.
No hay copias de documentos ni nuevas paginas por politica.

## Modularidad

Componentes y estilos separados por responsabilidad; no se agrega logica a main.js.
`npm run modules:check` impide archivos de fuente de mas de 1000 lineas.
Ese limite es un techo, no una meta: page-hero.css y cards.css ya requieren futuras
divisiones antes de extender su alcance. No se refactorizan en este bloque.

Hito aprobado para commit local. Sin push.

## Validacion

Build: 26 paginas de contenido, mas dos redirecciones HTML. PWA y sitemap correctos.
Navegador: 320/768/1440 px sin desbordamiento; temas claro/oscuro; Enter abre
politicas. Ancla inglesa abre la politica indicada. El retorno desde el documento
editorial llega a /criterios/#lista-politicas. Comprobacion modular: 79 archivos,
maximo 937 lineas. No se modifican documentos completos ni sus estilos actuales.
