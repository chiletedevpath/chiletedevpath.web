export type Language = "es" | "en";

export type RouteStatus = "available" | "review" | "development" | "planned";

export type LocalizedText = {
  title: string;
  description: string;
};

export type LearningModule = {
  id: string;
  order: number;
  phaseId: string;
  status: RouteStatus;
  contentCount: number;
  technologies: string[];
  href: string;
  i18n: Record<Language, LocalizedText>;
};

export type TechnologyRoute = {
  id: string;
  status: RouteStatus;
  href: string;
  moduleCount: number;
  i18n: Record<Language, LocalizedText & { atlasDescription: string }>;
};

export type AcademicProject = {
  id: string;
  slug: string;
  institution: string;
  course: string;
  type: string;
  featured: boolean;
  status: string;
  title: string;
  visual: string;
  progress: number;
  routeOrder: number;
  routeStage: string;
  routeLabel: string;
  technologies: string[];
  imageSrc: string;
  imageAlt: string;
  description: string;
  details: string[];
  problem: string;
  learned: string;
  improve: string;
  href: string;
  action: string;
  filterTags?: string[];
  demoHref?: string;
};
