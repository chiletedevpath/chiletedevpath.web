import { academicProjects, academicProjectsEn } from "./proyectos.js";

const slugs = [
  "gestion-inventario-java",
  "gestion-clinica-estructuras-datos",
  "gestion-comercial-db",
  "comidaperucha-frontend",
  "comidaperucha-bd-backend",
  "gestion-ventas-patrones-diseno",
  "sunat-consulta-api",
  "plataforma-catalogo-inventario",
];

const metaEs = [
  ["UTP", "Taller de Programación", "Aplicación de consola"],
  ["UTP", "Algoritmos y Estructuras de Datos", "Aplicación de consola"],
  ["UTP", "Base de Datos I", "Proyecto de datos"],
  ["UTP", "Desarrollo Web", "Aplicación frontend"],
  ["UTP", "Base de Datos II", "Backend y datos"],
  ["UTP", "Patrones de Diseño", "Arquitectura Java"],
  ["TECSUP", "Fullstack con Java", "API backend"],
  ["TECSUP", "Fullstack con Java", "Aplicación fullstack"],
];

const metaEn = [
  ["UTP", "Programming Workshop", "Console application"],
  ["UTP", "Algorithms and Data Structures", "Console application"],
  ["UTP", "Database I", "Data project"],
  ["UTP", "Web Development", "Frontend application"],
  ["UTP", "Database II", "Backend and data"],
  ["UTP", "Design Patterns", "Java architecture"],
  ["TECSUP", "Full-stack Java", "Backend API"],
  ["TECSUP", "Full-stack Java", "Full-stack application"],
];

function buildCatalog(projects, lang) {
  const metadata = lang === "en" ? metaEn : metaEs;

  return projects.map((project, index) => {
    const [institution, course, type] = metadata[index];
    return {
      ...project,
      slug: slugs[index],
      institution,
      course,
      type,
      featured: [4, 5, 7].includes(index),
      repositories: [{ label: lang === "en" ? "Source code" : "Código fuente", href: project.href }],
    };
  });
}

export const projectCatalog = buildCatalog(academicProjects, "es");
export const projectCatalogEn = buildCatalog(academicProjectsEn, "en");
