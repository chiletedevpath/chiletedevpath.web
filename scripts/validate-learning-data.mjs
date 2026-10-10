import {
  academicProjects,
  academicProjectsEn,
  homeFeaturedProjectIds,
  homeProjectStageIds,
} from "../src/data/proyectos.js";
import { getTechnologyRoutes, getLearningPaths } from "../src/data/ruta.js";
import { excelPractices } from "../src/data/excel-practices.js";

const errors = [];

const register = (condition, message) => {
  if (!condition) errors.push(message);
};

const uniqueIds = (items, label) => {
  const ids = items.map(({ id }) => id);
  register(new Set(ids).size === ids.length, `${label} contiene IDs duplicados.`);
  return new Set(ids);
};

const excel = getLearningPaths("es").find(path => path.id === "excel-productivity");
for (const module of excel.modules) {
  const files = excelPractices[module.id] ?? [];
  register(files.length === module.contentCount, `Conteo de libros incorrecto: ${module.id}.`);
  register(new Set(files).size === files.length, `Libros repetidos: ${module.id}.`);
}
register(Object.keys(excelPractices).every(id => excel.modules.some(module => module.id === id)), "Prácticas Excel sin módulo asociado.");

const spanishIds = uniqueIds(academicProjects, "academicProjects");
const englishIds = uniqueIds(academicProjectsEn, "academicProjectsEn");

register(
  spanishIds.size === englishIds.size && [...spanishIds].every((id) => englishIds.has(id)),
  "Los catálogos ES y EN no contienen el mismo conjunto de proyectos."
);

for (const [label, ids] of [
  ["La selección destacada", homeFeaturedProjectIds],
  ["La evidencia por etapa", homeProjectStageIds],
]) {
  register(new Set(ids).size === ids.length, `${label} repite proyectos.`);
  ids.forEach((id) => register(spanishIds.has(id), `${label} referencia un proyecto inexistente: ${id}.`));
}

const representedStages = new Set(
  homeProjectStageIds
    .map((id) => academicProjects.find((project) => project.id === id)?.routeStage)
    .filter(Boolean)
);

for (const requiredStage of ["productividad-datos", "software"]) {
  register(
    representedStages.has(requiredStage),
    `La portada no presenta evidencia para la ruta ${requiredStage}.`
  );
}

for (const lang of ["es", "en"]) {
  const routes = getTechnologyRoutes(lang);
  register(routes.length >= 2, `La portada ${lang.toUpperCase()} debe mostrar al menos dos rutas.`);
  register(routes.every((route) => route.id && route.title && route.description && route.href), `Una ruta ${lang.toUpperCase()} no tiene información pública completa.`);
}

if (errors.length > 0) {
  console.error("\nDatos de aprendizaje inválidos:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(
    `Datos verificados: ${academicProjects.length} proyectos, ${homeProjectStageIds.length} evidencias de portada y ${getTechnologyRoutes("es").length} rutas tecnológicas.`
  );
}
