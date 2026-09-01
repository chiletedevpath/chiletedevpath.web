import { academicProjects, academicProjectsEn } from "./proyectos.js";

const requiredFields = ["id", "slug", "institution", "course", "type", "href"];

function assertValidProjects(projects, lang) {
  const ids = new Set();
  const slugs = new Set();

  projects.forEach((project) => {
    requiredFields.forEach((field) => {
      if (!project[field]) {
        throw new Error(`Project ${project.id ?? "without id"} is missing ${field} in ${lang}.`);
      }
    });

    if (ids.has(project.id)) throw new Error(`Duplicate project id: ${project.id}.`);
    if (slugs.has(project.slug)) throw new Error(`Duplicate project slug: ${project.slug}.`);
    ids.add(project.id);
    slugs.add(project.slug);
  });
}

function indexProjectsById(projects, lang) {
  assertValidProjects(projects, lang);
  return new Map(projects.map((project) => [project.id, project]));
}

const englishProjectsById = indexProjectsById(academicProjectsEn, "en");
const spanishProjectsById = indexProjectsById(academicProjects, "es");

const spanishProjectIds = new Set(spanishProjectsById.keys());
academicProjectsEn.forEach(({ id }) => {
  if (!spanishProjectIds.has(id)) throw new Error(`English project ${id} has no Spanish source record.`);
});

function buildCatalog(projects, lang) {
  return projects.map((project) => ({
    ...project,
    repositories: [{ label: lang === "en" ? "Source code" : "Código fuente", href: project.href }],
  }));
}

export const projectCatalog = buildCatalog(academicProjects, "es");
export const projectCatalogEn = buildCatalog(
  academicProjects.map(({ id }) => {
    const translation = englishProjectsById.get(id);
    if (!translation) throw new Error(`Missing English translation for project ${id}.`);

    const source = spanishProjectsById.get(id);
    if (translation.slug !== source.slug || translation.href !== source.href) {
      throw new Error(`Project ${id} has inconsistent identity across languages.`);
    }
    return translation;
  }),
  "en"
);
