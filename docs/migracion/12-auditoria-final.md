# Auditoria de cierre

Fecha: 2026-10-07. Alcance: chiletedevpath-web, no los repositorios hermanos.
Actualizacion de accesibilidad: 2026-10-08.
Revision de contraste de Inicio: 2026-10-09.
Estado: revision local; sin autorizacion de push o despliegue.

## Documentacion

Solo existe un README en el proyecto, excluyendo dependencias y dist.
Se conserva actualizado: alcance, paleta, desarrollo, pruebas y contacto.
No hay README redundantes que eliminar. Los documentos de migracion sirven
como historial de decisiones y evidencias; este informe prevalece sobre sus
listas antiguas de pendientes. No se borran politicas ni registros utiles.
El ejemplo del Worker incorpora EMAILJS_PRIVATE_KEY, requerida por el codigo.

## Verificado

- Portadas aprobadas y commit local efc8400, sin push.
- Cinco heroes: 60 comprobaciones ES/EN, ambos temas, 320/768/1440 px.
- modules:check: 91 archivos, maximo 937 lineas.
- data:check: 9 proyectos, 7 evidencias de Inicio y 2 rutas.
- data:typecheck y nueve pruebas del Worker correctos.
- Build: 26 paginas; PWA: 3 iconos, 32 rutas de precarga.
- npm audit --omit=dev: cero vulnerabilidades reportadas. No cubre devDependencies.
- Movimiento reducido real detectado en el navegador: doce vistas principales
  ES/EN a 320 px, titulos visibles, sin revelaciones ocultas ni desbordamiento.
- Portadas internas: capa protectora de al menos 90% en la zona de texto;
  sobre blanco puro, contraste calculado de 9.09:1 para #dce8e1 y 7.01:1
  para #77dbd3. Es un limite analitico de esa zona, no certificacion de la pagina.
  En movil el texto empieza debajo de los 230 px reservados para la imagen.
- Composicion de Criterios revisada en escritorio y Sobre en movil; navegacion
  nocturna mantiene texto claro. No se extrapola a todas las transparencias.
- Teclado en Turnstile: entrada, enlaces y salida al boton de envio comprobados
  en estado de error de conexion local, sin enviar datos ni completar desafios.
- Inicio: capas reforzadas en hero, firma inferior y Origen; etiqueta de Origen
  clara en ambos temas. Limites analiticos del texto descriptivo sobre una
  imagen extrema: hero 6.66:1 de dia y 8.83:1 de noche; Origen 6.94:1 de dia
  y 8.94:1 de noche. Se conserva imagen, estructura y animacion aprobadas.
- Navegacion transparente: limite conservador usando solo su capa base,
  sin contar la capa adicional del gradiente: enlace activo 4.70:1 de dia,
  6.14:1 de noche; idioma secundario nocturno 6.44:1.
- Inicio: 107 textos sobre fondos compuestos medidos en cada tema, sin fallos
  en estado estable. Fotografias y gradientes se evaluan por separado; no se
  presentan como incluidos en ese conteo. ES/EN y 320/768/1440 px comprobados
  sobre un origen local limpio, sin cache PWA previa, sin overflow horizontal.

## Pendientes antes del cierre

1. Completar teclado en un desafio exitoso de Turnstile y entrega con el build final.
   Los permisos temporales de localhost fueron retirados; no debilitar la
   configuracion de produccion para validar el preview.
3. Revision solicitada de contraste de Inicio y navegacion transparente cerrada
   localmente. No equivale a certificacion integral WCAG ni incluye todos los
   estados dinamicos o widgets externos.
4. Refuerzo del rate limiter desplegado el 09/10/2026 con autorizacion:
   ahora la clave depende solo de la IP, almacenada como hash. Las pruebas
   verifican que cambiar correo no cambia cuota, otra IP queda independiente
   y la ausencia de IP conserva una cuota comun. Version remota:
   d16a6bff-e3fc-4dcb-ba3b-a23739fbdca6, con preview_urls desactivado.
   Nueve pruebas locales pasan; no prueban la entrega remota
   ni una cuota diaria global. Redes compartidas comparten el limite.
5. Revisar y agrupar los cambios locales pendientes en commits aprobados:
   contacto, accesibilidad, metadatos y documentacion. No mezclar ni restaurar
   la eliminacion local preexistente de editorial-sobre-marca.webp sin revisar.
6. Verificar version/changelog de la entrega, destinos externos y configuracion
   de GitHub Actions antes de publicar. Los enlaces de Academia revisados
   localmente no prueban disponibilidad remota.
7. Autorizar integracion y push al terminar. Validar el sitio publicado,
   contacto y actualizacion PWA despues del despliegue.

La candidata local es 4.13.0; build de 26 paginas, cuatro pruebas de PWA
y validacion de manifest/precache superados. La web publica sigue en 4.12.0
sin Turnstile configurado. No se envio una prueba de correo desde esa web
ni se ampliaron los origenes permitidos para sortear esa limitacion.

No se declara certificacion WCAG ni auditoria exhaustiva de seguridad.
