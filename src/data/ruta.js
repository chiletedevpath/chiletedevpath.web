export const routeStages = [
  {
    number: "01",
    title: "Base técnica",
    intent: "Comprender la lógica antes del código",
    topics: [
      {
        label: "Fundamentos de programación",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
      },
      {
        label: "Pseudocódigo y pensamiento algorítmico",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/01-pseudocodigo",
      },
      {
        label: "Programación básica",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/02-programacion-basica",
      },
    ],
    result:
      "Ejercicios simples, razonamiento paso a paso y primeras soluciones explicadas.",
    status: "Disponible",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
    action: "Entrar a fundamentos",
  },
  {
    number: "02",
    title: "Construcción de software",
    intent: "Organizar soluciones con criterio",
    topics: [
      {
        label: "POO",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
      },
      {
        label: "Estructuras de datos",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/04-estructuras-datos",
      },
      {
        label: "Algoritmos",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/05-algoritmos",
      },
    ],
    result:
      "Código más ordenado, estructuras reutilizables y solución de problemas con mejor diseño.",
    status: "En crecimiento",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
    action: "Ver avance",
  },
  {
    number: "03",
    title: "Web y datos",
    intent: "Conectar datos, web y documentación",
    topics: [
      {
        label: "Bases de datos",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/06-bases-de-datos",
      },
      {
        label: "Desarrollo web",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
      },
      {
        label: "Git, GitHub y documentación técnica",
        href: "https://github.com/chiletedevpath/chiletedevpath/tree/main/docs",
      },
    ],
    result:
      "Prácticas web, consultas de datos y repositorios documentados con contexto.",
    status: "Disponible",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
    action: "Abrir desarrollo web",
  },
  {
    number: "04",
    title: "Especialización",
    intent: "Construir proyectos con alcance real",
    topics: [
      {
        label: "Patrones de diseño",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/08-patrones",
      },
      {
        label: "Backend",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/09-backend",
      },
      {
        label: "Frontend moderno",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/10-frontend",
      },
      {
        label: "Proyectos integradores",
        href: "https://github.com/chiletedevpath/academia",
      },
    ],
    result:
      "Proyectos con arquitectura inicial, criterios de publicación y evidencia profesional.",
    status: "En revisión",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/08-patrones",
    action: "Ver patrones",
  },
];

export const learningSections = [
  {
    title: "Fundamentos",
    status: "Disponible",
    description: "Base conceptual para iniciar la ruta con criterio y lenguaje común.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
  },
  {
    title: "Pseudocódigo",
    status: "Disponible",
    description: "Ejercicios del curso de Principios de Algoritmos organizados para practicar lógica.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/01-pseudocodigo",
  },
  {
    title: "Programación básica",
    status: "Disponible",
    description: "Prácticas iniciales para traducir razonamiento a código ejecutable.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/02-programacion-basica",
  },
  {
    title: "POO",
    status: "Disponible",
    description: "Clases, objetos, encapsulamiento, herencia, abstracción y polimorfismo.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
  },
  {
    title: "Estructuras de datos",
    status: "Disponible",
    description: "Listas, tablas hash y grafos para organizar información con criterio.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/04-estructuras-datos",
  },
  {
    title: "Algoritmos",
    status: "Disponible",
    description: "Búsqueda, ordenamiento, recursión, backtracking y resolución de problemas.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/05-algoritmos",
  },
  {
    title: "Bases de datos",
    status: "Disponible",
    description: "Modelado, SQL y criterios de publicación segura de datos.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/06-bases-de-datos",
  },
  {
    title: "Desarrollo web",
    status: "Disponible",
    description: "HTML, CSS, JavaScript inicial y PHP desarrollado como avance académico.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
  },
  {
    title: "Patrones de diseño",
    status: "Disponible",
    description: "SOLID, patrones creacionales, estructurales y casos integradores.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/08-patrones",
  },
  {
    title: "Backend",
    status: "En revisión segura",
    description: "APIs, persistencia, seguridad, testing e integraciones con variables de entorno.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/09-backend",
  },
  {
    title: "Frontend moderno",
    status: "Reservado",
    description: "Se activará cuando existan prácticas reales revisadas y aprobadas.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/10-frontend",
  },
];

export const techStack = [
  {
    name: "HTML",
    tone: "markup",
    description: "Estructura semántica del contenido y base de accesibilidad.",
    descriptionEn: "Semantic content structure and accessibility foundation.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
  },
  {
    name: "CSS",
    tone: "style",
    description: "Layout responsive, jerarquía visual y sistema de temas.",
    descriptionEn: "Responsive layout, visual hierarchy and theme system.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
  },
  {
    name: "JavaScript",
    tone: "script",
    description: "Interacción, asincronía inicial y comportamiento en navegador.",
    descriptionEn: "Interaction, initial asynchrony and browser behavior.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
  },
  {
    name: "PHP",
    tone: "server",
    description: "Formularios, ciclos, arreglos y procesamiento web básico.",
    descriptionEn: "Forms, loops, arrays and basic web processing.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web/php",
  },
  {
    name: "Java",
    tone: "java",
    description: "POO, estructuras, algoritmos, patrones y backend académico.",
    descriptionEn: "OOP, structures, algorithms, patterns and academic backend.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
  },
  {
    name: "SQL",
    tone: "data",
    description: "Modelado, consultas y criterio de datos seguros.",
    descriptionEn: "Modeling, queries and safe data criteria.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/06-bases-de-datos",
  },
  {
    name: "Spring Boot",
    tone: "backend",
    description: "APIs, persistencia, seguridad, pruebas e integraciones.",
    descriptionEn: "APIs, persistence, security, testing and integrations.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/09-backend",
  },
  {
    name: "Astro",
    tone: "web",
    description: "Base estática de la web pública de Chilete DevPath.",
    descriptionEn: "Static base for the public Chilete DevPath website.",
    href: "https://github.com/chiletedevpath/chiletedevpath.github.io",
  },
];

export const routeStagesEn = [
  {
    number: "01",
    intent: "Understand logic before code",
    title: "Technical foundation",
    topics: [
      {
        label: "Programming fundamentals",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
      },
      {
        label: "Pseudocode and algorithmic thinking",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/01-pseudocodigo",
      },
      {
        label: "Basic programming",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/02-programacion-basica",
      },
    ],
    result: "Simple exercises, step-by-step reasoning and explained solutions.",
    status: "Available",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
    action: "Open foundation",
  },
  {
    number: "02",
    intent: "Organize solutions with judgment",
    title: "Software construction",
    topics: [
      {
        label: "OOP",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
      },
      {
        label: "Data structures",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/04-estructuras-datos",
      },
      {
        label: "Algorithms",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/05-algoritmos",
      },
    ],
    result: "More organized code, reusable structures and better problem-solving design.",
    status: "Growing",
    href: "https://github.com/chiletedevpath/aprendizaje",
    action: "View progress",
  },
  {
    number: "03",
    intent: "Connect data, web and documentation",
    title: "Web and data",
    topics: [
      {
        label: "Databases",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/06-bases-de-datos",
      },
      {
        label: "Web development",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
      },
      {
        label: "Git, GitHub and technical documentation",
        href: "https://github.com/chiletedevpath/aprendizaje",
      },
    ],
    result: "Web practice, data queries and repositories documented with context.",
    status: "Available",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
    action: "Open web",
  },
  {
    number: "04",
    intent: "Build projects with real scope",
    title: "Specialization",
    topics: [
      {
        label: "Design patterns",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/08-patrones",
      },
      {
        label: "Backend",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/09-backend",
      },
      {
        label: "Modern frontend",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/10-frontend",
      },
      {
        label: "Integrating projects",
        href: "https://github.com/chiletedevpath/aprendizaje",
      },
    ],
    result: "Projects with initial architecture, publishing criteria and professional evidence.",
    status: "Under review",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/08-patrones",
    action: "View patterns",
  },
];

export const routeEntriesEn = [
  {
    status: "Available",
    title: "Fundamentals",
    description: "Conceptual base to start the path with shared language and judgment.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
  },
  {
    status: "Available",
    title: "Pseudocode",
    description: "Algorithm principles exercises organized to practice logic.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/01-pseudocodigo",
  },
  {
    status: "Growing",
    title: "Basic programming",
    description: "Initial practice to translate reasoning into executable code.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/02-programacion-basica",
  },
  {
    status: "Growing",
    title: "OOP",
    description: "Classes, objects, encapsulation, inheritance, abstraction and polymorphism.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
  },
  {
    status: "Growing",
    title: "Data structures",
    description: "Lists, hash tables and graphs to organize information with judgment.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/04-estructuras-datos",
  },
  {
    status: "Growing",
    title: "Algorithms",
    description: "Search, sorting, recursion, backtracking and problem solving.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/05-algoritmos",
  },
];
