import { academicProjects, academicProjectsEn } from "./proyectos.js";

const slugs = [
  "gestion-inventario-java",
  "gestion-clinica-estructuras-datos",
  "gestion-comercial-db",
  "comidaperucha",
  "gestion-ventas-patrones-diseno",
  "sunat-consulta-api",
  "plataforma-catalogo-inventario",
];

const metaEs = [
  ["UTP", "Taller de Programación", "Aplicación de consola"],
  ["UTP", "Algoritmos y Estructuras de Datos", "Aplicación de consola"],
  ["UTP", "Base de Datos I", "Proyecto de datos"],
  ["UTP", "Desarrollo Web + Base de Datos II", "Caso fullstack"],
  ["UTP", "Patrones de Diseño", "Arquitectura Java"],
  ["TECSUP", "Fullstack con Java", "API backend"],
  ["TECSUP", "Fullstack con Java", "Aplicación fullstack"],
];

const metaEn = [
  ["UTP", "Programming Workshop", "Console application"],
  ["UTP", "Algorithms and Data Structures", "Console application"],
  ["UTP", "Database I", "Data project"],
  ["UTP", "Web Development + Database II", "Full-stack case"],
  ["UTP", "Design Patterns", "Java architecture"],
  ["TECSUP", "Full-stack Java", "Backend API"],
  ["TECSUP", "Full-stack Java", "Full-stack application"],
];

function buildCatalog(projects, lang) {
  const comidaFrontend = projects[3];
  const comidaBackend = projects[4];
  const sourceProjects = [projects[0], projects[1], projects[2], null, projects[5], projects[6], projects[7]];
  const metadata = lang === "en" ? metaEn : metaEs;

  return sourceProjects.map((project, index) => {
    const [institution, course, type] = metadata[index];
    if (index !== 3) {
      return {
        ...project,
        slug: slugs[index],
        institution,
        course,
        type,
        featured: [4, 6].includes(index),
        repositories: [{ label: lang === "en" ? "Source code" : "Código fuente", href: project.href }],
      };
    }

    return {
      ...comidaFrontend,
      slug: slugs[index],
      institution,
      course,
      type,
      featured: true,
      status: lang === "en" ? "Integrated academic case" : "Caso académico integrado",
      title: "ComidaPerucha",
      visual: "Fullstack",
      routeStage: "fullstack",
      filterTags: ["fullstack", "frontend", "backend", "datos"],
      routeLabel: lang === "en" ? "Stage 03 · Web and data" : "Etapa 03 · Web y datos",
      technologies: [...new Set([...comidaFrontend.technologies, ...comidaBackend.technologies])],
      description: lang === "en"
        ? "Integrated academic case that connects a responsive restaurant frontend with a Spring Boot API and a distributed data scenario using PostgreSQL, MongoDB and Spark."
        : "Caso académico integrado que conecta una experiencia web adaptable con una API Spring Boot y un escenario de datos distribuido con PostgreSQL, MongoDB y Spark.",
      details: lang === "en"
        ? ["Responsive multi-page frontend", "Catalog and reporting REST API", "Relational, document and batch data layers"]
        : ["Frontend multipágina adaptable", "API REST de catálogos y reportes", "Capas relacional, documental y batch"],
      problem: lang === "en"
        ? "Connect the public-facing experience and its data services while keeping simulated commercial flows clearly separate from real transactions."
        : "Conectar la experiencia visible y sus servicios de datos manteniendo los flujos comerciales simulados claramente separados de operaciones reales.",
      learned: lang === "en"
        ? "I integrated web consumption, REST services, relational distribution, a document read model and batch indicators as one traceable academic case."
        : "Integré consumo web, servicios REST, distribución relacional, un modelo documental de lectura e indicadores batch como un solo caso académico trazable.",
      improve: lang === "en"
        ? "Run the complete distributed environment from a clean setup and add automated end-to-end tests before presenting it as a public live demo."
        : "Ejecutar el entorno distribuido completo desde una instalación limpia y añadir pruebas end-to-end antes de presentarlo como demo pública.",
      repositories: [
        { label: lang === "en" ? "Frontend code" : "Código del frontend", href: comidaFrontend.href },
        { label: lang === "en" ? "Backend code" : "Código del backend", href: comidaBackend.href },
      ],
    };
  });
}

export const projectCatalog = buildCatalog(academicProjects, "es");
export const projectCatalogEn = buildCatalog(academicProjectsEn, "en");
