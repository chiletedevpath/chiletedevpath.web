# Hito 3: piloto de ruta y modulo

Estado: implementado y aprobado para cierre local.

## Alcance

- `/ruta/software/` y `/en/ruta/software/`: recorrido con requisitos, fases y doce modulos.
- `/ruta/software/fundamentos/` y equivalente ingles: seis bloques, diez ejercicios,
  tres laboratorios, criterios de avance y materiales de apoyo.
- El directorio de rutas enlaza al nuevo recorrido.
- Los demas modulos conservan sus fuentes actuales; no se crean paginas vacias.

## Fuente y limites

Fuente: `aprendizaje/00-fundamentos/README.md`, `checklist-avance.md` y
`laboratorios/README.md`. Enlaces a ejercicios verificados contra archivos locales.
El resumen ingles se traduce; los materiales fuente siguen en espanol y se indica
expresamente en el modulo.

La web orienta el estudio y enlaza material real. No entrega certificados ni registra
progreso personal. Las metricas son cantidades de contenido, no aprendizaje del usuario.
El recorrido enlaza al explorador de proyectos; la asociacion precisa por competencia
queda pendiente antes de generalizar el modelo.

## Validacion

- Build: 28 paginas; cuatro nuevas vistas educativas.
- Navegador: ES/EN, temas claro/oscuro, 320/768/1440 px sin desbordamiento horizontal.
- Modulo: seis bloques y diez enlaces a ejercicios.
- Recorrido: doce modulos; Fundamentos enlaza a la pagina interna.
- Directorio: anclas a las rutas 7 y 30 revelan la pagina correspondiente en la prueba de treinta rutas.

## Antes de replicar

Revisar la composicion y el flujo con el responsable. Separar plantillas de ruta y
modulo cuando haya un segundo caso real; no ampliar condicionales indefinidamente.
Validar contenido, requisitos, objetivos y fuentes de cada nuevo modulo antes de
publicarlo. No extrapolar los conteos ni criterios de Fundamentos a otras etapas.

Hito aprobado para commit local. El push queda reservado para el cierre autorizado de la migracion.
