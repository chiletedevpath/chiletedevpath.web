# Hito 4: Proyectos

Estado: implementado y aprobado para cierre local.

## Alcance

Composicion inspirada en proyectos-v3: hero editorial, resumen calculado y
explorador maestro-detalle. No se replica el indice inferior del prototipo ni
se crean paginas adicionales de casos. Los datos siguen en projectCatalog.

Portadas horizontales 4:1 en escritorio y 3:1 en movil. Lista con altura limitada,
busqueda sin dependencia de tildes, filtros traducidos y seleccion por teclado.
No se agregan dependencias, material academico ni SVG.

## Verificacion

- Build de 28 paginas y git diff --check correctos.
- Navegador: busqueda gestion encuentra cuatro proyectos; vacio oculta el detalle.
- Flechas cambian seleccion y mantienen un solo panel visible.
- ES/EN y temas claro/oscuro comprobados; sin desbordamiento a 320, 768 y 1440 px.
- La portada visible carga correctamente y conserva proporcion 4:1 en escritorio.

Hito aprobado para commit local. Sin push hasta el cierre autorizado de la migracion.
La asociacion detallada de proyectos con competencias sigue fuera de este bloque.
