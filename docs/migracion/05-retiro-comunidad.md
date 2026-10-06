# Retiro de Comunidad

Cambio aprobado: la seccion queda fuera hasta que exista una comunidad real.
Se retiran paginas ES/EN, CSS propio, datos de redes, navegacion y precache.
La pagina Comunidad se retira; redes sociales y contacto permanecen en el footer,
segun la aclaracion posterior del responsable. No hay enlace al modulo retirado.

Las URLs antiguas redirigen al Inicio de su idioma. Astro genera redireccion HTML
en este despliegue estatico, no una respuesta HTTP 301. La configuracion del
alojamiento se revisara antes de publicar. Las redirecciones no entran al sitemap.

Pruebas: build con 26 paginas de contenido; sitemap y precache comprobados;
redireccion inglesa verificada en navegador y cero enlaces internos a Comunidad.
Se incorporan las cuatro paginas del piloto educativo al precache actual.

No se borran repositorios academicos ni politicas. Sin push.
