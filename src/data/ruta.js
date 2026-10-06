// @ts-check

/** @typedef {import("./contracts.ts").LearningModule} LearningModule */
/** @typedef {import("./contracts.ts").LearningPath} LearningPath */
/** @typedef {import("./contracts.ts").TechnologyRoute} TechnologyRoute */
/** @typedef {import("./contracts.ts").Language} Language */
/** @typedef {import("./contracts.ts").RouteStatus} RouteStatus */

const LEARNING_REPOSITORY = "https://github.com/chiletedevpath/aprendizaje";
const ROUTE_STATUS_HREF = `${LEARNING_REPOSITORY}#estado-verificable-de-la-ruta`;

export const ROUTE_STATUS = Object.freeze({
  AVAILABLE: "available",
  REVIEW: "review",
  DEVELOPMENT: "development",
  PLANNED: "planned",
});

/** @type {Readonly<Record<RouteStatus, number>>} */
export const STATUS_WEIGHT = Object.freeze({
  [ROUTE_STATUS.AVAILABLE]: 100,
  [ROUTE_STATUS.REVIEW]: 75,
  [ROUTE_STATUS.DEVELOPMENT]: 50,
  [ROUTE_STATUS.PLANNED]: 0,
});

/** @type {Record<Language, Record<RouteStatus, string>>} */
const statusLabels = {
  es: {
    [ROUTE_STATUS.AVAILABLE]: "Disponible",
    [ROUTE_STATUS.REVIEW]: "En revisión",
    [ROUTE_STATUS.DEVELOPMENT]: "En desarrollo",
    [ROUTE_STATUS.PLANNED]: "Planificado",
  },
  en: {
    [ROUTE_STATUS.AVAILABLE]: "Available",
    [ROUTE_STATUS.REVIEW]: "Under review",
    [ROUTE_STATUS.DEVELOPMENT]: "In development",
    [ROUTE_STATUS.PLANNED]: "Planned",
  },
};

/** @type {Record<Language, Record<RouteStatus, string>>} */
const statusCountLabels = {
  es: {
    [ROUTE_STATUS.AVAILABLE]: "disponibles",
    [ROUTE_STATUS.REVIEW]: "en revisión",
    [ROUTE_STATUS.DEVELOPMENT]: "en desarrollo",
    [ROUTE_STATUS.PLANNED]: "planificados",
  },
  en: {
    [ROUTE_STATUS.AVAILABLE]: "available",
    [ROUTE_STATUS.REVIEW]: "under review",
    [ROUTE_STATUS.DEVELOPMENT]: "in development",
    [ROUTE_STATUS.PLANNED]: "planned",
  },
};

/** @type {LearningModule[]} */
export const learningModules = [
  {
    id: "fundamentos", order: 0, phaseId: "base", status: ROUTE_STATUS.AVAILABLE, contentCount: 6,
    technologies: ["Lógica"], href: `${LEARNING_REPOSITORY}/tree/main/00-fundamentos`,
    i18n: {
      es: { title: "Fundamentos", description: "Base conceptual para estudiar, resolver problemas y documentar avances." },
      en: { title: "Fundamentals", description: "Conceptual foundation for studying, solving problems and documenting progress." },
    },
  },
  {
    id: "pseudocodigo", order: 1, phaseId: "base", status: ROUTE_STATUS.AVAILABLE, contentCount: 7,
    technologies: ["PSeInt", "Pseudocódigo"], href: `${LEARNING_REPOSITORY}/tree/main/01-pseudocodigo`,
    i18n: {
      es: { title: "Pseudocódigo", description: "Lógica progresiva, pruebas de escritorio y algoritmos ejecutables en PSeInt." },
      en: { title: "Pseudocode", description: "Progressive logic, desk checks and executable algorithms in PSeInt." },
    },
  },
  {
    id: "programacion-basica", order: 2, phaseId: "base", status: ROUTE_STATUS.AVAILABLE, contentCount: 15,
    technologies: ["Java", "Scala", "JavaScript"], href: `${LEARNING_REPOSITORY}/tree/main/02-programacion-basica`,
    i18n: {
      es: { title: "Programación básica", description: "Variables, control de flujo, funciones, colecciones, errores y archivos." },
      en: { title: "Basic programming", description: "Variables, control flow, functions, collections, errors and files." },
    },
  },
  {
    id: "poo", order: 3, phaseId: "software", status: ROUTE_STATUS.AVAILABLE, contentCount: 16,
    technologies: ["Java", "Scala", "POO"], href: `${LEARNING_REPOSITORY}/tree/main/03-poo`,
    i18n: {
      es: { title: "Programación orientada a objetos", description: "Clases, relaciones, herencia, polimorfismo, contratos y modelado." },
      en: { title: "Object-oriented programming", description: "Classes, relationships, inheritance, polymorphism, contracts and modeling." },
    },
  },
  {
    id: "estructuras-datos", order: 4, phaseId: "software", status: ROUTE_STATUS.AVAILABLE, contentCount: 14,
    technologies: ["Java", "Estructuras"], href: `${LEARNING_REPOSITORY}/tree/main/04-estructuras-datos`,
    i18n: {
      es: { title: "Estructuras de datos", description: "Colecciones lineales, tablas hash, árboles, grafos e índices simulados." },
      en: { title: "Data structures", description: "Linear collections, hash tables, trees, graphs and simulated indexes." },
    },
  },
  {
    id: "algoritmos", order: 5, phaseId: "software", status: ROUTE_STATUS.AVAILABLE, contentCount: 16,
    technologies: ["Java", "Algoritmos"], href: `${LEARNING_REPOSITORY}/tree/main/05-algoritmos`,
    i18n: {
      es: { title: "Algoritmos", description: "Búsqueda, ordenamiento, recursión, backtracking, grafos y optimización." },
      en: { title: "Algorithms", description: "Search, sorting, recursion, backtracking, graphs and optimization." },
    },
  },
  {
    id: "bases-de-datos", order: 6, phaseId: "web-data", status: ROUTE_STATUS.AVAILABLE, contentCount: 16,
    technologies: ["SQL", "PostgreSQL", "MongoDB"], href: `${LEARNING_REPOSITORY}/tree/main/06-bases-de-datos`,
    i18n: {
      es: { title: "Bases de datos", description: "Modelado, SQL, motores relacionales, NoSQL, seguridad y optimización." },
      en: { title: "Databases", description: "Modeling, SQL, relational engines, NoSQL, security and optimization." },
    },
  },
  {
    id: "desarrollo-web", order: 7, phaseId: "web-data", status: ROUTE_STATUS.AVAILABLE, contentCount: 14,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"], href: `${LEARNING_REPOSITORY}/tree/main/07-desarrollo-web`,
    i18n: {
      es: { title: "Desarrollo web", description: "HTML, CSS, JavaScript del navegador, accesibilidad y práctica responsive." },
      en: { title: "Web development", description: "HTML, CSS, browser JavaScript, accessibility and responsive practice." },
    },
  },
  {
    id: "patrones", order: 8, phaseId: "specialization", status: ROUTE_STATUS.AVAILABLE, contentCount: 8,
    technologies: ["Java", "SOLID", "Patrones GOF"], href: `${LEARNING_REPOSITORY}/tree/main/08-patrones`,
    i18n: {
      es: { title: "Patrones de diseño", description: "SOLID, patrones GOF, refactorización y justificación de decisiones." },
      en: { title: "Design patterns", description: "SOLID, GOF patterns, refactoring and decision rationale." },
    },
  },
  {
    id: "backend", order: 9, phaseId: "specialization", status: ROUTE_STATUS.AVAILABLE, contentCount: 12,
    technologies: ["PHP", "Java", "Spring Boot"], href: `${LEARNING_REPOSITORY}/tree/main/09-backend`,
    i18n: {
      es: { title: "Backend", description: "HTTP, APIs, persistencia, seguridad, pruebas, observabilidad y arquitectura." },
      en: { title: "Backend", description: "HTTP, APIs, persistence, security, testing, observability and architecture." },
    },
  },
  {
    id: "frontend", order: 10, phaseId: "specialization", status: ROUTE_STATUS.PLANNED, contentCount: 0,
    technologies: [], href: ROUTE_STATUS_HREF,
    i18n: {
      es: { title: "Frontend moderno", description: "Se incorporará cuando existan prácticas propias estudiadas y comprobadas." },
      en: { title: "Modern frontend", description: "It will be added when there are original, studied and verified practices." },
    },
  },
  {
    id: "publicacion-produccion", order: 11, phaseId: "production", status: ROUTE_STATUS.PLANNED, contentCount: 0,
    technologies: [], href: ROUTE_STATUS_HREF,
    i18n: {
      es: { title: "Publicación y producción", description: "Se incorporará cuando existan laboratorios propios, reproducibles y revisados." },
      en: { title: "Publishing and production", description: "It will be added when original, reproducible and reviewed labs exist." },
    },
  },
];

const routePhases = [
  {
    id: "base", moduleIds: ["fundamentos", "pseudocodigo", "programacion-basica"],
    technologies: { es: ["Lógica", "Pseudocódigo", "Java", "Scala"], en: ["Logic", "Pseudocode", "Java", "Scala"] },
    i18n: {
      es: { title: "Base técnica", intent: "Comprender la lógica antes del código", result: "Razonamiento paso a paso y primeras soluciones explicadas.", action: "Entrar a fundamentos" },
      en: { title: "Technical foundation", intent: "Understand logic before code", result: "Step-by-step reasoning and first explained solutions.", action: "Open fundamentals" },
    },
  },
  {
    id: "software", moduleIds: ["poo", "estructuras-datos", "algoritmos"],
    technologies: { es: ["Java", "POO", "Algoritmos"], en: ["Java", "OOP", "Algorithms"] },
    i18n: {
      es: { title: "Construcción de software", intent: "Organizar soluciones con criterio", result: "Código ordenado, estructuras reutilizables y mejores decisiones de diseño.", action: "Explorar POO" },
      en: { title: "Software construction", intent: "Organize solutions with judgment", result: "Organized code, reusable structures and better design decisions.", action: "Explore OOP" },
    },
  },
  {
    id: "web-data", moduleIds: ["bases-de-datos", "desarrollo-web"],
    technologies: { es: ["SQL", "HTML", "CSS", "JavaScript"], en: ["SQL", "HTML", "CSS", "JavaScript"] },
    i18n: {
      es: { title: "Web y datos", intent: "Conectar interfaces, datos y documentación", result: "Prácticas web y de datos organizadas como evidencia verificable.", action: "Abrir desarrollo web" },
      en: { title: "Web and data", intent: "Connect interfaces, data and documentation", result: "Web and data practices organized as verifiable evidence.", action: "Open web development" },
    },
  },
  {
    id: "specialization", moduleIds: ["patrones", "backend", "frontend"],
    technologies: { es: ["Patrones", "Backend", "Frontend"], en: ["Patterns", "Backend", "Frontend"] },
    i18n: {
      es: { title: "Especialización", intent: "Construir soluciones con mayor alcance", result: "Patrones y backend disponibles; frontend permanece como siguiente etapa comprobable.", action: "Ver patrones" },
      en: { title: "Specialization", intent: "Build solutions with broader scope", result: "Patterns and backend are available; frontend remains the next verifiable stage.", action: "View patterns" },
    },
  },
  {
    id: "production", moduleIds: ["publicacion-produccion"],
    technologies: { es: ["GitHub", "Build", "Deploy"], en: ["GitHub", "Build", "Deploy"] },
    i18n: {
      es: { title: "Publicación y producción", intent: "Preparar proyectos antes de publicarlos", result: "Los laboratorios reproducibles se incorporarán cuando exista evidencia propia.", action: "Ver estado de la ruta" },
      en: { title: "Publishing and production", intent: "Prepare projects before publishing them", result: "Reproducible labs will be added when original evidence exists.", action: "View route status" },
    },
  },
];

/** @type {LearningModule[]} */
export const excelLearningModules = [
  {
    id: "excel-entorno-datos", order: 0, phaseId: "excel-base", status: ROUTE_STATUS.AVAILABLE, contentCount: 1,
    technologies: ["Excel", "Datos"], href: `${LEARNING_REPOSITORY}/tree/main/excel-y-productividad/00-entorno-y-datos`,
    i18n: {
      es: { title: "Entorno y datos", description: "Captura y organización de datos en una estructura tabular clara." },
      en: { title: "Workspace and data", description: "Capturing and organizing data in a clear tabular structure." },
    },
  },
  {
    id: "excel-formato-presentacion", order: 1, phaseId: "excel-base", status: ROUTE_STATUS.AVAILABLE, contentCount: 1,
    technologies: ["Excel", "Formato"], href: `${LEARNING_REPOSITORY}/tree/main/excel-y-productividad/01-formato-y-presentacion`,
    i18n: {
      es: { title: "Formato y presentación", description: "Seguimiento de actividades con formato que ayuda a leer y decidir." },
      en: { title: "Formatting and presentation", description: "Activity tracking with formatting that supports reading and decisions." },
    },
  },
  {
    id: "excel-formulas-referencias", order: 2, phaseId: "excel-base", status: ROUTE_STATUS.AVAILABLE, contentCount: 2,
    technologies: ["Excel", "Fórmulas"], href: `${LEARNING_REPOSITORY}/tree/main/excel-y-productividad/02-formulas-operadores-y-referencias`,
    i18n: {
      es: { title: "Fórmulas, operadores y referencias", description: "Presupuestos y cotizadores con referencias relativas y absolutas." },
      en: { title: "Formulas, operators and references", description: "Budgets and quotes using relative and absolute references." },
    },
  },
  {
    id: "excel-limpieza-organizacion", order: 3, phaseId: "excel-analisis", status: ROUTE_STATUS.AVAILABLE, contentCount: 1,
    technologies: ["Excel", "Limpieza"], href: `${LEARNING_REPOSITORY}/tree/main/excel-y-productividad/03-limpieza-y-organizacion-datos`,
    i18n: {
      es: { title: "Limpieza y organización de datos", description: "Normalización, separación y validación de datos para un directorio usable." },
      en: { title: "Data cleaning and organization", description: "Normalizing, separating and validating data for a usable directory." },
    },
  },
  {
    id: "excel-funciones-matematicas", order: 4, phaseId: "excel-analisis", status: ROUTE_STATUS.AVAILABLE, contentCount: 1,
    technologies: ["Excel", "Funciones"], href: `${LEARNING_REPOSITORY}/tree/main/excel-y-productividad/04-funciones-matematicas-y-condicionales`,
    i18n: {
      es: { title: "Funciones matemáticas y condicionales", description: "Control de recursos a partir de cálculos y reglas verificables." },
      en: { title: "Mathematical and conditional functions", description: "Resource control through calculations and verifiable rules." },
    },
  },
  {
    id: "excel-funciones-estadisticas", order: 5, phaseId: "excel-analisis", status: ROUTE_STATUS.AVAILABLE, contentCount: 1,
    technologies: ["Excel", "Estadística"], href: `${LEARNING_REPOSITORY}/tree/main/excel-y-productividad/05-funciones-estadisticas`,
    i18n: {
      es: { title: "Funciones estadísticas", description: "Análisis de calificaciones para transformar registros en información." },
      en: { title: "Statistical functions", description: "Grade analysis that turns records into information." },
    },
  },
  {
    id: "excel-visualizacion-reportes", order: 6, phaseId: "excel-reportes", status: ROUTE_STATUS.AVAILABLE, contentCount: 1,
    technologies: ["Excel", "Reportes"], href: `${LEARNING_REPOSITORY}/tree/main/excel-y-productividad/06-visualizacion-y-reportes`,
    i18n: {
      es: { title: "Visualización y reportes", description: "Reporte de inscripciones para comunicar resultados con claridad." },
      en: { title: "Visualization and reporting", description: "Enrollment reporting that communicates results clearly." },
    },
  },
  {
    id: "excel-integracion", order: 7, phaseId: "excel-reportes", status: ROUTE_STATUS.AVAILABLE, contentCount: 1,
    technologies: ["Excel", "Integración"], href: `${LEARNING_REPOSITORY}/tree/main/excel-y-productividad/07-integracion`,
    i18n: {
      es: { title: "Integración", description: "Control de una ruta de aprendizaje que reúne fórmulas, datos y visualización." },
      en: { title: "Integration", description: "Learning-path tracking that brings formulas, data and visualization together." },
    },
  },
  {
    id: "excel-tablas-analisis", order: 8, phaseId: "excel-aplicacion", status: ROUTE_STATUS.AVAILABLE, contentCount: 1,
    technologies: ["Excel", "Tablas"], href: `${LEARNING_REPOSITORY}/tree/main/excel-y-productividad/08-tablas-y-analisis-operativo`,
    i18n: {
      es: { title: "Tablas y análisis operativo", description: "Control operativo de obra como práctica aplicada de análisis tabular." },
      en: { title: "Tables and operational analysis", description: "Construction operations control as an applied tabular-analysis practice." },
    },
  },
  {
    id: "excel-modelos-financieros", order: 9, phaseId: "excel-aplicacion", status: ROUTE_STATUS.AVAILABLE, contentCount: 1,
    technologies: ["Excel", "Finanzas"], href: `${LEARNING_REPOSITORY}/tree/main/excel-y-productividad/09-modelos-financieros-personales`,
    i18n: {
      es: { title: "Modelos financieros personales", description: "Control financiero personal que reúne presupuestos, metas, deudas y resultados." },
      en: { title: "Personal financial models", description: "Personal financial control that brings together budgets, goals, debt and outcomes." },
    },
  },
];

const excelRoutePhases = [
  {
    id: "excel-base", moduleIds: ["excel-entorno-datos", "excel-formato-presentacion", "excel-formulas-referencias"],
    technologies: { es: ["Excel", "Datos", "Fórmulas"], en: ["Excel", "Data", "Formulas"] },
    i18n: {
      es: { title: "Base de trabajo", intent: "Preparar datos antes de calcular", result: "Registros legibles y fórmulas construidas con referencias claras.", action: "Abrir entorno y datos" },
      en: { title: "Working foundation", intent: "Prepare data before calculating", result: "Readable records and formulas built with clear references.", action: "Open workspace and data" },
    },
  },
  {
    id: "excel-analisis", moduleIds: ["excel-limpieza-organizacion", "excel-funciones-matematicas", "excel-funciones-estadisticas"],
    technologies: { es: ["Limpieza", "Funciones", "Estadística"], en: ["Cleaning", "Functions", "Statistics"] },
    i18n: {
      es: { title: "Análisis", intent: "Convertir registros en información útil", result: "Datos ordenados y cálculos que respaldan una decisión.", action: "Abrir limpieza de datos" },
      en: { title: "Analysis", intent: "Turn records into useful information", result: "Organized data and calculations that support a decision.", action: "Open data cleaning" },
    },
  },
  {
    id: "excel-reportes", moduleIds: ["excel-visualizacion-reportes", "excel-integracion"],
    technologies: { es: ["Reportes", "Visualización"], en: ["Reporting", "Visualization"] },
    i18n: {
      es: { title: "Reportes e integración", intent: "Comunicar avances sin perder contexto", result: "Reportes y controles que conectan los ejercicios anteriores.", action: "Abrir visualización" },
      en: { title: "Reporting and integration", intent: "Communicate progress without losing context", result: "Reports and controls that connect earlier exercises.", action: "Open visualization" },
    },
  },
  {
    id: "excel-aplicacion", moduleIds: ["excel-tablas-analisis", "excel-modelos-financieros"],
    technologies: { es: ["Tablas", "Modelos"], en: ["Tables", "Models"] },
    i18n: {
      es: { title: "Aplicación", intent: "Llevar los fundamentos a casos completos", result: "Dos libros aplicados para una operación y unas finanzas personales.", action: "Abrir análisis operativo" },
      en: { title: "Application", intent: "Bring fundamentals into complete cases", result: "Two applied workbooks for operations and personal finance.", action: "Open operational analysis" },
    },
  },
];

/** @param {string | undefined} lang @returns {Language} */
const normalizeLang = (lang) => (lang === "en" ? "en" : "es");
const translate = (item, lang) => item.i18n[normalizeLang(lang)];
const average = (values) => Math.round(values.reduce((total, value) => total + value, 0) / values.length);

const derivePhaseStatus = (modules) => {
  if (modules.every((module) => module.status === ROUTE_STATUS.AVAILABLE)) return ROUTE_STATUS.AVAILABLE;
  if (modules.every((module) => module.status === ROUTE_STATUS.PLANNED)) return ROUTE_STATUS.PLANNED;
  if (modules.every((module) => [ROUTE_STATUS.AVAILABLE, ROUTE_STATUS.REVIEW].includes(module.status))) return ROUTE_STATUS.REVIEW;
  return ROUTE_STATUS.DEVELOPMENT;
};

export const getLearningModules = (lang = "es") => {
  const language = normalizeLang(lang);
  return learningModules.slice().sort((a, b) => a.order - b.order).map((module) => ({
    ...module,
    ...translate(module, language),
    number: String(module.order).padStart(2, "0"),
    statusLabel: statusLabels[language][module.status],
    progress: STATUS_WEIGHT[module.status],
  }));
};

export const getRouteStages = (lang = "es") => {
  const language = normalizeLang(lang);
  const modulesById = new Map(getLearningModules(language).map((module) => [module.id, module]));

  return routePhases.map((phase, index) => {
    const modules = phase.moduleIds.map((id) => modulesById.get(id));
    const status = derivePhaseStatus(modules);
    const firstAvailable = modules.find((module) => module.status !== ROUTE_STATUS.PLANNED);
    return {
      id: phase.id,
      number: String(index + 1).padStart(2, "0"),
      ...translate(phase, language),
      topics: modules.map((module) => ({ id: module.id, label: module.title, href: module.href })),
      technologies: phase.technologies[language],
      statusId: status,
      status: statusLabels[language][status],
      progress: average(modules.map((module) => STATUS_WEIGHT[module.status])),
      contentCount: modules.reduce((total, module) => total + module.contentCount, 0),
      moduleCount: modules.length,
      href: firstAvailable?.href ?? ROUTE_STATUS_HREF,
    };
  });
};

export const getRouteSummary = (lang = "es") => {
  const language = normalizeLang(lang);
  const modules = getLearningModules(language);
  const stages = getRouteStages(language);
  const counts = Object.fromEntries(Object.values(ROUTE_STATUS).map((status) => [status, 0]));
  modules.forEach((module) => { counts[module.status] += 1; });
  const moduleCount = modules.length;
  const availableCount = counts[ROUTE_STATUS.AVAILABLE];
  const publishedContentCount = modules.reduce((total, module) => total + module.contentCount, 0);
  const progress = average(modules.map((module) => STATUS_WEIGHT[module.status]));
  const statusOrder = [ROUTE_STATUS.AVAILABLE, ROUTE_STATUS.REVIEW, ROUTE_STATUS.DEVELOPMENT, ROUTE_STATUS.PLANNED];
  const statusDetail = statusOrder
    .filter((status) => counts[status] > 0)
    .map((status) => `${counts[status]} ${statusCountLabels[language][status]}`)
    .join(" · ");

  return {
    moduleCount,
    stageCount: stages.length,
    counts,
    availableCount,
    publishedContentCount,
    progress,
    phaseTitles: stages.map((stage) => stage.title),
    moduleIndicator: language === "en" ? `${availableCount} of ${moduleCount} modules available` : `${availableCount} de ${moduleCount} módulos disponibles`,
    contentIndicator: language === "en" ? `${publishedContentCount} published topic blocks` : `${publishedContentCount} bloques temáticos publicados`,
    progressLabel: language === "en" ? "Overall progress" : "Avance general",
    progressValue: `${progress}%`,
    statusDetail,
  };
};

/** @type {LearningPath[]} */
const learningPaths = [
  {
    id: "software",
    order: 1,
    href: "/ruta/#software",
    modules: learningModules,
    phases: routePhases,
    i18n: {
      es: { title: "Desarrollo de software", description: "Lógica, programación, datos, web, patrones y backend organizados como un recorrido progresivo.", atlasDescription: "De lógica a proyectos explicables.", evidenceLabel: "bloques temáticos" },
      en: { title: "Software development", description: "Logic, programming, data, web, patterns and backend organized as a progressive path.", atlasDescription: "From logic to explainable projects.", evidenceLabel: "topic blocks" },
    },
  },
  {
    id: "excel-productivity",
    order: 2,
    href: "/ruta/#excel-productivity",
    modules: excelLearningModules,
    phases: excelRoutePhases,
    i18n: {
      es: { title: "Productividad y datos", description: "Datos, fórmulas, análisis y modelos aplicados para resolver trabajo concreto con hojas de cálculo.", atlasDescription: "Excel hoy; datos y automatización como alcance.", evidenceLabel: "libros de práctica" },
      en: { title: "Productivity and data", description: "Data, formulas, analysis and applied models for solving concrete spreadsheet work.", atlasDescription: "Excel today; data and automation as the broader scope.", evidenceLabel: "practice workbooks" },
    },
  },
];

const getPathModules = (path, lang) => {
  const language = normalizeLang(lang);
  return path.modules.slice().sort((a, b) => a.order - b.order).map((module) => ({
    ...module,
    ...translate(module, language),
    number: String(module.order).padStart(2, "0"),
    statusLabel: statusLabels[language][module.status],
    progress: STATUS_WEIGHT[module.status],
  }));
};

const getPathStages = (path, lang) => {
  const language = normalizeLang(lang);
  const modulesById = new Map(getPathModules(path, language).map((module) => [module.id, module]));

  return path.phases.map((phase, index) => {
    const modules = phase.moduleIds.map((id) => modulesById.get(id)).filter(Boolean);
    const status = derivePhaseStatus(modules);
    const firstAvailable = modules.find((module) => module.status !== ROUTE_STATUS.PLANNED);
    return {
      id: phase.id,
      number: String(index + 1).padStart(2, "0"),
      ...translate(phase, language),
      modules,
      technologies: phase.technologies[language],
      statusId: status,
      status: statusLabels[language][status],
      progress: average(modules.map((module) => STATUS_WEIGHT[module.status])),
      contentCount: modules.reduce((total, module) => total + module.contentCount, 0),
      moduleCount: modules.length,
      href: firstAvailable?.href ?? ROUTE_STATUS_HREF,
    };
  });
};

const getPathSummary = (path, lang) => {
  const language = normalizeLang(lang);
  const modules = getPathModules(path, language);
  const counts = Object.fromEntries(Object.values(ROUTE_STATUS).map((status) => [status, 0]));
  modules.forEach((module) => { counts[module.status] += 1; });
  const availableCount = counts[ROUTE_STATUS.AVAILABLE];
  const contentCount = modules.reduce((total, module) => total + module.contentCount, 0);
  const progress = average(modules.map((module) => STATUS_WEIGHT[module.status]));
  return {
    moduleCount: modules.length,
    availableCount,
    contentCount,
    progress,
    counts,
    moduleIndicator: language === "en" ? `${availableCount} of ${modules.length} modules available` : `${availableCount} de ${modules.length} módulos disponibles`,
    contentIndicator: `${contentCount} ${translate(path, language).evidenceLabel}`,
    progressLabel: language === "en" ? "Path progress" : "Avance de la ruta",
    progressValue: `${progress}%`,
  };
};

export const getLearningPaths = (lang = "es") => {
  const language = normalizeLang(lang);
  return learningPaths.slice().sort((a, b) => a.order - b.order).map((path) => ({
    ...path,
    ...translate(path, language),
    modules: getPathModules(path, language),
    stages: getPathStages(path, language),
    summary: getPathSummary(path, language),
    status: derivePhaseStatus(path.modules),
    statusLabel: statusLabels[language][derivePhaseStatus(path.modules)],
  }));
};

export const techStack = [
  { name: "HTML", tone: "markup", href: `${LEARNING_REPOSITORY}/tree/main/07-desarrollo-web`, i18n: { es: { category: "Estructura web", description: "Estructura semántica del contenido y base de accesibilidad." }, en: { category: "Web structure", description: "Semantic content structure and accessibility foundation." } } },
  { name: "CSS", tone: "style", href: `${LEARNING_REPOSITORY}/tree/main/07-desarrollo-web`, i18n: { es: { category: "Diseño de interfaz", description: "Layout responsive, jerarquía visual y sistema de temas." }, en: { category: "Interface design", description: "Responsive layout, visual hierarchy and theme system." } } },
  { name: "JavaScript", tone: "script", href: `${LEARNING_REPOSITORY}/tree/main/07-desarrollo-web`, i18n: { es: { category: "Interacción web", description: "Interacción, asincronía y comportamiento en el navegador." }, en: { category: "Web interaction", description: "Interaction, asynchrony and browser behavior." } } },
  { name: "PHP", tone: "server", href: `${LEARNING_REPOSITORY}/tree/main/09-backend/03-procesamiento-del-lado-servidor`, i18n: { es: { category: "Procesamiento en servidor", description: "Formularios, sesiones, acceso a datos y procesamiento del lado servidor." }, en: { category: "Server-side processing", description: "Forms, sessions, data access and server-side processing." } } },
  { name: "Java", tone: "java", href: `${LEARNING_REPOSITORY}/tree/main/03-poo`, i18n: { es: { category: "Programación y backend", description: "POO, estructuras, algoritmos, patrones y backend académico." }, en: { category: "Programming and backend", description: "OOP, structures, algorithms, patterns and academic backend." } } },
  { name: "PostgreSQL", tone: "data", href: `${LEARNING_REPOSITORY}/tree/main/06-bases-de-datos`, i18n: { es: { category: "Base de datos relacional", description: "Modelado relacional, restricciones, consultas e índices." }, en: { category: "Relational database", description: "Relational modeling, constraints, queries and indexes." } } },
  { name: "Spring Boot", tone: "backend", href: `${LEARNING_REPOSITORY}/tree/main/09-backend`, i18n: { es: { category: "Backend con Java", description: "APIs, persistencia, seguridad, pruebas e integraciones." }, en: { category: "Java backend", description: "APIs, persistence, security, testing and integrations." } } },
  { name: "Astro", tone: "web", href: "https://github.com/chiletedevpath/chiletedevpath.web", i18n: { es: { category: "Publicación web", description: "Base estática de la web pública de Chilete DevPath." }, en: { category: "Web publishing", description: "Static base for the public Chilete DevPath website." } } },
];

export const getTechStack = (lang = "es") => {
  const language = normalizeLang(lang);
  return techStack.map((tech) => ({ ...tech, ...tech.i18n[language] }));
};

export const getTechnologyRoutes = (lang = "es") => {
  return getLearningPaths(lang).map(({ modules, stages, summary, phases, ...route }) => ({
    ...route,
    href: normalizeLang(lang) === "en" ? route.href.replace("/ruta/", "/en/ruta/") : route.href,
    moduleCount: summary.moduleCount,
  }));
};
