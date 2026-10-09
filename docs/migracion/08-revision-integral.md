# Revision integral del nuevo diseno

Fecha: 2026-10-06. Revision local, no aprobacion de despliegue.
No se generaron imagenes ni se cambiaron componentes durante esta revision.

## Evidencia

- 26 paginas ES/EN: 680 enlaces internos y 196 referencias a archivos sin
  destinos locales ausentes. No incluye disponibilidad de servidores externos.
- 18 vistas x 320, 768 y 1440 px: 54 comprobaciones sin desbordamiento,
  H1 ausente/duplicado, imagen sin atributo alt, boton sin nombre o ancla
  de la misma pagina inexistente.
- Otras 14 comprobaciones moviles ES/EN en tema oscuro sin desbordamiento.
- Proyectos: busqueda vacia, filtro Productividad, restauracion de Todos
  y cambio de pestana con ArrowDown comprobados.
- Recursos: busqueda sin resultados muestra estado vacio y oculta entradas.
- Menu movil: apertura y cierre con Escape comprobados.
- Las nueve ubicaciones enlazadas existen en Academia local. La comprobacion
  HTTP remota fallo por conexion; no se consideran enlaces remotos verificados.
- La revision previa de politicas comprobo ocho documentos y retorno ES/EN.
- Datos: 9 proyectos, 7 evidencias de portada y 2 rutas validados por script.
- Hay reglas prefers-reduced-motion en estilos. No se emulo la preferencia
  del sistema en esta revision; falta esa prueba y una auditoria completa de
  contraste con medicion, lector de pantalla y recorrido integral de teclado.

## Pendientes prioritarios

### Actualizacion del 2026-10-07

- Contacto: la solicitud real paso Turnstile y llego a EmailJS. El primer
  envio fallo por conexion Gmail caducada; tras reconectarla, el reenvio fue
  aceptado y el propietario confirmo la recepcion del mensaje. No equivale
  a una nueva prueba integral tras la reconexion ni a despliegue de la web.
- Los permisos locales temporales se retiraron del Worker y de Turnstile.
- Ruta ya describe software y productividad con datos en ES/EN. El manifest
  ahora describe rutas tecnologicas, proyectos y recursos, sin comunidad.
- La confirmacion del formulario distingue nombre/correo de datos sensibles.
- Inicio usa threshold 0 para que la altura total de una seccion no retrase
  su entrada. Sin IntersectionObserver conserva el contenido visible.
- Build: 26 paginas. Diff sin errores de espacios. Comprobacion de Inicio
  a 320 px: sin desbordamiento y Rutas revelada al navegar a su ancla.
- Siguen pendientes portadas especificas, contraste medido, recorrido completo
  de teclado y emulacion de movimiento reducido. No hay aprobacion de push.

### Portadas incorporadas el 2026-10-07

### Comprobaciones de accesibilidad del 2026-10-07

- Inicio a 320 px: sin desbordamiento, entrada a Rutas activa el revelado.
- Inicio utiliza las portadas nuevas de Obras y Plataforma, junto con la
  portada existente de Gestion Comercial DB.
- Se corrigieron etiquetas y enlaces claros, texto del boton final en ambos
  temas y foco visible. Medicion DOM de 126 textos sobre fondos base en cada
  tema: sin ratios inferiores a 4.5:1 (texto normal) o 3:1 (texto grande).
  Esta medicion no calcula pixeles de gradientes, fotografias ni pseudo-elementos;
  no certifica por si sola conformidad WCAG de toda la web.
- Menu movil: Enter abre, Escape cierra y conserva foco en el boton.
- Explorador: ArrowDown selecciona Inventario Java y mueve el foco a su tab.
- Movimiento reducido: reglas globales y de Inicio presentes; la preferencia
  real del navegador es false. Falta probar con la preferencia activada en el
  sistema; el controlador disponible solo permite emular el viewport.

Se incorporaron seis ilustraciones aportadas por el propietario: Obras Excel,
Inventario Java, ComidaPerucha Frontend, ComidaPerucha BD Backend, SUNAT API
y Plataforma de Catalogo e Inventario. Se conservaron los PNG originales y
se generaron WebP (100-211 KB por archivo), vinculados al catalogo ES/EN.
Posteriormente, por indicacion del propietario, se eliminaron los seis PNG
no utilizados y el script puntual de conversion. Se conservan los WebP y
las tres portadas generales que aun tienen referencias en los datos.
El explorador conserva formato 4:1 en escritorio y 3:1 en movil, sin deformar
las imagenes verticales: muestra un encuadre del contenido central, no la
lamina completa. Sus titulos siguen presentes en HTML. Las ilustraciones no
deben interpretarse como capturas ni como evidencia de funcionalidades.
Las seis imagenes cargaron en navegador; a 390 px el panel mide 343 x 114 px
y no hay desbordamiento horizontal. Build y validacion de datos correctos.

Los puntos originales siguientes son el diagnostico inicial; esta actualizacion
prevalece para los puntos 1, 4, 5 y 8 corregidos parcial o completamente.

1. Recursos tiene formulario con boton activo pero Turnstile pendiente en esta
   compilacion. No ofrecer envio operativo hasta configurar clave publica,
   Worker, secretos y ruta /api/contacto y comprobar entrega controlada.
   El bloqueo cliente existente evita enviar sin configuracion; no prueba
   que el Worker este desplegado. Alternativa temporal: contacto por correo.
2. Cuatro proyectos comparten academia-cover.webp y dos conservan laminas
   antiguas. La plataforma sigue mostrando una portada titulada Gestor de
   Catalogo de Productos, mas estrecha que el alcance fullstack actual.
3. Inicio, cierre de Inicio y Sobre repiten el mismo paisaje. No es un recurso
   documental comprobado de Chilete: no presentarlo como fotografia real.
4. El SEO de /ruta y /en/ruta enumera solo el recorrido de software; falta
   Productividad y datos. El manifest conserva la palabra comunidad.
5. La confirmacion de Recursos dice no enviar datos personales aunque el
   formulario pide nombre y correo. Debe distinguir esos datos de contacto
   de contrasenas, documentos e informacion sensible de terceros.
6. Hay estilos y recursos de composiciones antiguas. Revisar uso antes de
   limpiar: no borrar por nombre ni mezclar con cambios visuales aprobados.
7. La eliminacion local de editorial-sobre-marca.webp sigue sin resolver;
   ninguna referencia auditada depende de ella. Confirmar su retiro al cierre.
8. Entrada de Inicio en movil: el observador usa threshold 0.16 sobre secciones
   completas. Proyectos mide 3111 px a 320 px; cuando su inicio esta a 398 px
   del borde superior, el encabezado aun permanece invisible. Revela despues
   de seguir bajando. Observar encabezados/bloques pequenos, o usar threshold
   bajo y rootMargin, evitando espacios aparentemente vacios. La animacion
   si se activa; el problema comprobado es el retraso de lectura.

## Heroes: decision por funcion

| Seccion | Recomendacion |
| --- | --- |
| Inicio | Diferenciar su imagen de Sobre: aprendizaje tecnologico amplio o fotografia propia del espacio de estudio. Mantener protagonista el texto. |
| Ruta | Conservar hero de directorio sin foto: busqueda y orientacion, no otro paisaje. |
| Area y modulo | No agregar imagen por obligacion; objetivos, estado y contenido primero. |
| Proyectos | Conservar hero editorial y metrica verificable. Las imagenes pertenecen a los proyectos, no necesitan repetirse arriba. |
| Recursos | Imagen existente adecuada; mantenerla como apoyo y no agregar imagenes a cada coleccion. |
| Criterios | Conservar composicion tipografica e indice, sin foto decorativa. |
| Sobre | Preferir fotografia propia o licenciada del origen, verificable. Si es ilustracion, identificarla como tal. |
| Politicas | Conservar encabezado documental compacto, sin fotografias ni animaciones distractoras. |
| Cierre Inicio | Fotografia distinta y verificable o composicion sin foto; evitar tercera repeticion del mismo fondo. |

## Portadas de proyectos

| Proyecto | Estado de imagen | Accion |
| --- | --- | --- |
| Control de Obras de Construccion | Generica de software | Captura anonimizada del libro Excel o portada propia. Prioridad alta. |
| Gestion de Inventario Java | Generica compartida | Captura de consola con datos ficticios o portada editorial de consola. |
| Gestion Clinica | Editorial especifica existente | Conservar provisionalmente; no llamarla captura real. |
| Gestion Comercial DB | Editorial especifica existente | Conservar provisionalmente; evidencia real ideal: modelo relacional. |
| ComidaPerucha Frontend | Generica compartida | Capturar la web real responsive; material visual ya existe en Academia. |
| ComidaPerucha BD Backend | Generica compartida | Imagen de arquitectura o evidencia anonimizada del API/modelo de datos. |
| Gestion de Ventas con Patrones | Editorial especifica existente | Conservar provisionalmente; diagrama real mejor si es legible. |
| SUNAT Consulta API | Lamina grafica anterior | Sustituir por evidencia anonimizada de API o editorial coherente. |
| Plataforma de Catalogo e Inventario | Lamina anterior de solo frontend | Sustituir por portada que represente interfaz y servicios integrados. |

## Produccion de imagenes

Capturas reales con datos ficticios tienen prioridad sobre generacion. Nunca
generar una interfaz y presentarla como prueba de que el proyecto funciona.
Las editoriales deben identificarse como ilustraciones cuando corresponda.

Crear maestro 1600x900 para Inicio y vistas amplias; preparar portada derivada
1600x400 para el explorador. Este usa 4:1 en escritorio y 3:1 en movil; el
recorte debe revisarse por proyecto, no aplicar un corte central ciego.
Conservar objeto principal en zona central, sin texto indispensable en bordes.
Exportar WebP, objetivo orientativo de 60-150 KB, verificando legibilidad.
Las portadas actuales revisadas no tienen un problema grave de peso: los
archivos mas grandes del inventario son un logo PNG de 302 KB y un hero WebP
de 112 KB. Sustituirlas por pertinencia, no solo por compresion.

## Prompts si no hay captura adecuada

Base comun: imagen editorial raster horizontal, realista, sin SVG, sin texto
promocional, sin marcas o logos, sin datos personales, sin interfaz presentada
como captura real. Luz neutra, contraste legible, verde profundo y turquesa
contenidos con acentos claros. Composicion distinta para cada proyecto, sin
repetir el mismo escritorio con laptop. Objeto principal visible en una franja
horizontal central compatible con recorte 4:1; fondo secundario discreto.

### Control de Obras de Construccion
Portada editorial de gestion de obras con hojas de calculo: pantalla amplia
con cuadricula de costos, jornadas y barras comparativas discretas, plano de
obra y casco al costado. Datos ficticios sin nombres ni cifras contractuales.
La hoja de calculo debe ser el centro, no codigo ni un tablero de software.

### Gestion de Inventario Java
Portada editorial de una aplicacion de consola: monitor con terminal limpia,
menu numerado de productos, venta y existencias representado sin texto fino
indispensable. Pequenas cajas y etiquetas anonimas como contexto. Sin panel
web ni interfaz grafica que el proyecto de consola no tiene.

### ComidaPerucha Frontend
Portada editorial de una experiencia web gastronomica peruana: vista frontal
de una pantalla y un telefono mostrando composicion visual de menu de comida,
fotografias de platos y controles simples, con comida real al costado. Sin
logotipos inventados ni texto promocional. No afirmar que es captura del sitio.

### ComidaPerucha BD Backend
Portada editorial tecnica de una API gastronomica y datos: composicion limpia
de cliente, servicio y almacenamiento conectados en tres grupos legibles,
con un pequeno contexto de pedidos de comida. Representacion raster sobria,
sin cadenas de codigo ficticias, sin dashboard de usuario ni texto pequeno.

### SUNAT Consulta API
Portada editorial de consulta y validacion de identificadores empresariales:
solicitud y respuesta estructurada junto a registro de historial, tres bloques
tecnicos visibles sobre una superficie clara. Identificadores sustituidos por
placeholders, sin RUC reales, sin sello oficial ni logo de entidad estatal.

### Plataforma de Catalogo e Inventario
Portada editorial de catalogo, pedidos y stock integrados: productos y cajas
anonimas, pantalla con catalogo visual y una segunda vista tecnica de servicios
conectados. Debe comunicar integracion fullstack, no solo tienda ni solo tabla.
Nada de pagos, clientes reales ni funcionalidades ajenas al alcance descrito.

### Inicio (opcional, no sustituye fotografias del origen)
Panorama editorial de aprendizaje de tecnologias: espacio realista con una
pantalla de programacion, una hoja de calculo y cuaderno de estudio, organizados
sin collage saturado. Luz natural, materiales contemporaneos. Zona izquierda
con poco detalle para titular HTML; objetos reconocibles a la derecha. Sin
titulos ni logos dentro de la imagen, sin prometer una escuela o comunidad.

## Orden de cierre

Resolver operatividad de contacto y coherencia de metadatos; luego producir
las seis portadas, revisar recortes en Inicio y Proyectos y diferenciar el
origen del hero. Completar contraste, movimiento reducido y teclado. Aprobar,
commit por bloque y push solo con autorizacion final de despliegue.
