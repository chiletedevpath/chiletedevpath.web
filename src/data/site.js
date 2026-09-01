import packageJson from "../../package.json" with { type: "json" };
import { academicProjects } from "./proyectos.js";
import { policies } from "./recursos.js";
import { getRouteSummary } from "./ruta.js";

export const site = {
  name: "Chilete DevPath",
  author: "Adrián Pisco",
  url: "https://chiletedevpath.com",
  version: `V${packageJson.version}`,
  description:
    "Chilete DevPath es la marca personal de Adrián Pisco para documentar aprendizaje, proyectos, criterio técnico y comunidad.",
  descriptionEn:
    "Chilete DevPath is Adrián Pisco's personal learning path for documenting technical practice, academic projects and responsible publishing.",
  socialImageAlt: {
    es: "Chilete DevPath, ruta de aprendizaje técnico y proyectos académicos de Adrián Pisco.",
    en: "Chilete DevPath, Adrián Pisco's technical learning path and academic projects.",
  },
  email: "chiletedevpath@gmail.com",
  location: "Chilete, Contumazá, Cajamarca, Perú",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Chilete%2C%20Cajamarca%2C%20Peru",
};

const seoByPath = {
  "/": "Chilete DevPath organiza aprendizaje técnico, práctica y proyectos académicos en una ruta pública construida con criterio.",
  "/ruta/": "Ruta progresiva de Chilete DevPath: fundamentos, programación, datos, web, patrones, backend, frontend y publicación.",
  "/proyectos/": "Proyectos académicos explicados desde el problema, la solución construida y el aprendizaje demostrado.",
  "/comunidad/": "Canales y espacios de Chilete DevPath para compartir avances, conversar sobre aprendizaje y mejorar la ruta.",
  "/sobre/": "Origen, propósito y criterios de Chilete DevPath, una marca personal de aprendizaje técnico creada desde Chilete, Cajamarca.",
  "/recursos/": "Ejercicios, retos, guías y material de consulta conectados con la ruta de aprendizaje de Chilete DevPath.",
  "/criterios/": "Criterios de Chilete DevPath para publicar con autoría clara, privacidad, seguridad y uso responsable de IA.",
  "/politicas/": "Políticas editoriales, de seguridad, bienestar y uso responsable de IA que orientan las publicaciones de Chilete DevPath.",
  "/en/": "Chilete DevPath organizes technical learning, practice and academic projects into a public path built with judgment.",
  "/en/ruta/": "Chilete DevPath's progressive path through foundations, programming, data, web, patterns, backend, frontend and publishing.",
  "/en/proyectos/": "Academic projects explained through the problem, the solution built and the learning demonstrated.",
  "/en/comunidad/": "Chilete DevPath channels and spaces for sharing progress, discussing learning and improving the path.",
  "/en/sobre/": "The origin, purpose and criteria behind Chilete DevPath, a personal technical learning brand built from Chilete, Cajamarca.",
  "/en/recursos/": "Exercises, challenges, guides and reference material connected to the Chilete DevPath learning path.",
  "/en/criterios/": "Chilete DevPath criteria for publishing with clear authorship, privacy, security and responsible AI use.",
  "/en/politicas/": "Editorial, security, wellbeing and responsible AI policies that guide Chilete DevPath publications.",
};

export const getPageDescription = (pathname, lang = "es") =>
  seoByPath[pathname] ?? (lang === "en" ? site.descriptionEn : site.description);

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Ruta", href: "/ruta/" },
  { label: "Proyectos", href: "/proyectos/" },
  { label: "Comunidad", href: "/comunidad/" },
];

export const navMoreItems = [
  { label: "Sobre", href: "/sobre/" },
  { label: "Recursos", href: "/recursos/" },
  { label: "Criterios", href: "/criterios/" },
];

export const navItemsEn = [
  { label: "Home", href: "/en/" },
  { label: "Path", href: "/en/ruta/" },
  { label: "Projects", href: "/en/proyectos/" },
  { label: "Community", href: "/en/comunidad/" },
];

export const navMoreItemsEn = [
  { label: "About", href: "/en/sobre/" },
  { label: "Resources", href: "/en/recursos/" },
  { label: "Criteria", href: "/en/criterios/" },
];

export const getMetrics = (lang = "es") => {
  const summary = getRouteSummary(lang);
  const isEnglish = lang === "en";

  return isEnglish
    ? [
        { label: "Organized modules", value: String(summary.moduleCount), detail: summary.statusDetail },
        { label: "Published topic blocks", value: String(summary.publishedContentCount), detail: "Counted from the verified structure of each module" },
        { label: "Academic projects", value: String(academicProjects.length), detail: "Formal evidence preserved in Academia" },
        { label: "Active policies", value: String(policies.length), detail: "Publishing, AI, wellbeing and authorship" },
      ]
    : [
        { label: "Módulos ordenados", value: String(summary.moduleCount), detail: summary.statusDetail },
        { label: "Bloques temáticos publicados", value: String(summary.publishedContentCount), detail: "Contados desde la estructura verificada de cada módulo" },
        { label: "Proyectos académicos", value: String(academicProjects.length), detail: "Evidencia formal conservada en Academia" },
        { label: "Políticas activas", value: String(policies.length), detail: "Publicación, IA, bienestar y autoría" },
      ];
};

export const getHeroStats = (lang = "es") => {
  const summary = getRouteSummary(lang);
  const isEnglish = lang === "en";
  return {
    indicators: isEnglish
      ? [summary.moduleIndicator, `${academicProjects.length} academic projects`, `${policies.length} active criteria`]
      : [summary.moduleIndicator, `${academicProjects.length} proyectos académicos`, `${policies.length} criterios activos`],
    pathSteps: summary.phaseTitles,
    progressLabel: summary.progressLabel,
    progressValue: summary.progressValue,
    progressPercent: summary.progress,
  };
};

export const valueProps = [
  {
    title: "Aprendizaje con orden",
    text: "La ruta evita saltar de tecnología en tecnología sin base. Primero se entiende, luego se practica.",
  },
  {
    title: "Evidencia real",
    text: "Los proyectos muestran avance, contexto y criterio; no se venden como portafolio antes de estar listos.",
  },
  {
    title: "Criterio responsable",
    text: "Cada publicación cuida autoría, fuentes, privacidad, IA y bienestar técnico.",
  },
  {
    title: "Origen con identidad",
    text: "La marca nace desde Chilete, Cajamarca, con una mirada local que apunta a comunidad global.",
  },
];

export const valuePropsEn = [
  {
    title: "Ordered learning",
    text: "The path avoids jumping from technology to technology without a base. First understand, then practice.",
  },
  {
    title: "Real evidence",
    text: "Projects show progress, context and judgment; they are not sold as portfolio pieces before they are ready.",
  },
  {
    title: "Responsible criteria",
    text: "Each publication considers authorship, sources, privacy, AI and technical wellbeing.",
  },
  {
    title: "Origin with identity",
    text: "The brand starts from Chilete, Cajamarca, with a local view that aims for a global community.",
  },
];

export const socialsEn = [
  {
    name: "GitHub",
    label: "Main repository",
    description: "Code, projects and technical evolution of the ecosystem.",
    href: "https://github.com/chiletedevpath",
    primary: true,
  },
  {
    name: "LinkedIn",
    label: "Professional profile",
    description: "Trajectory, learning process and professional profile.",
    href: "https://www.linkedin.com/in/adri%C3%A1n-piscos",
  },
  {
    name: "Discord",
    label: "Community space",
    description: "Channel to share progress, practice and community.",
    href: "https://discord.gg/4XsXRT4rG",
  },
  {
    name: "Instagram",
    label: "Visual content",
    description: "Visual posts about brand and learning.",
    href: "https://www.instagram.com/chiletedevpath/",
  },
  {
    name: "TikTok",
    label: "Short content",
    description: "Short pieces to learn and follow the process.",
    href: "https://www.tiktok.com/@chiletedevpath",
  },
  {
    name: "Facebook",
    label: "Community",
    description: "Social presence of Chilete DevPath.",
    href: "https://web.facebook.com/chiletedevpath",
  },
];

export const socials = [
  {
    name: "GitHub",
    label: "Repositorio principal",
    description: "Código, proyectos y evolución técnica del ecosistema.",
    href: "https://github.com/chiletedevpath",
    primary: true,
  },
  {
    name: "LinkedIn",
    label: "Perfil profesional",
    description: "Trayectoria, aprendizaje y perfil profesional.",
    href: "https://www.linkedin.com/in/adri%C3%A1n-piscos",
  },
  {
    name: "Discord",
    label: "Espacio de comunidad",
    description: "Canal para compartir avance, práctica y comunidad.",
    href: "https://discord.gg/4XsXRT4rG",
  },
  {
    name: "Instagram",
    label: "Contenido visual",
    description: "Publicaciones visuales sobre marca y aprendizaje.",
    href: "https://www.instagram.com/chiletedevpath/",
  },
  {
    name: "TikTok",
    label: "Contenido corto",
    description: "Piezas breves para aprender y seguir el proceso.",
    href: "https://www.tiktok.com/@chiletedevpath",
  },
  {
    name: "Facebook",
    label: "Comunidad",
    description: "Presencia social de Chilete DevPath.",
    href: "https://web.facebook.com/chiletedevpath",
  },
];
