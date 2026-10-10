export const excelPractices = {
  "excel-entorno-datos": ["00-registro-recursos.xlsx"],
  "excel-formato-presentacion": ["01-seguimiento-actividades.xlsx"],
  "excel-formulas-referencias": ["02-presupuesto-taller.xlsx", "02-cotizador-transporte.xlsx"],
  "excel-limpieza-organizacion": ["03-directorio-limpio.xlsx"],
  "excel-funciones-matematicas": ["04-control-recursos.xlsx"],
  "excel-funciones-estadisticas": ["05-analisis-calificaciones.xlsx"],
  "excel-visualizacion-reportes": ["06-reporte-inscripciones.xlsx"],
  "excel-integracion": ["07-control-ruta-aprendizaje.xlsx"],
  "excel-tablas-analisis": ["08-control-operativo-obra.xlsx", "08-control-operativo-vuelos.xlsx"],
  "excel-modelos-financieros": ["09-control-financiero-personal.xlsx"],
};

export const getExcelPracticeUrl = (module, file) => `${module.href.replace("/tree/", "/blob/")}/practicas/${file}`;
