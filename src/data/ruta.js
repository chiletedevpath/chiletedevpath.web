const LEARNING_REPOSITORY = "https://github.com/chiletedevpath/aprendizaje";
const ROUTE_STATUS_HREF = `${LEARNING_REPOSITORY}#estado-verificable-de-la-ruta`;

export const ROUTE_STATUS = Object.freeze({
  AVAILABLE: "available",
  REVIEW: "review",
  DEVELOPMENT: "development",
  PLANNED: "planned",
});

export const STATUS_WEIGHT = Object.freeze({
  [ROUTE_STATUS.AVAILABLE]: 100,
  [ROUTE_STATUS.REVIEW]: 75,
  [ROUTE_STATUS.DEVELOPMENT]: 50,
  [ROUTE_STATUS.PLANNED]: 0,
});

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
