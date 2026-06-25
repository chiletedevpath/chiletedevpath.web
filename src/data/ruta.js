export const routeStages = [
  {
    number: "01",
    title: "Base tecnica",
    intent: "Comprender la logica antes del codigo",
    topics: [
      {
        label: "Fundamentos de programacion",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
      },
      {
        label: "Pseudocodigo y pensamiento algoritmico",
        href: "https://github.com/chiletedevpath/aprendizaje/tree/main/01-pseudocodigo",
      },
      {
        label: "Programacion basica",
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
    title: "Construccion de software",
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
      "Codigo mas ordenado, estructuras reutilizables y solucion de problemas con mejor diseno.",
    status: "En crecimiento",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
    action: "Ver avance",
  },
  {
    number: "03",
    title: "Web y datos",
    intent: "Conectar datos, web y documentacion",
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
        label: "Git, GitHub y documentacion tecnica",
        href: "https://github.com/chiletedevpath/aprendizaje",
      },
    ],
    result:
      "Practicas web, consultas de datos y repositorios documentados con contexto.",
    status: "Disponible",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
    action: "Abrir desarrollo web",
  },
  {
    number: "04",
    title: "Especializacion",
    intent: "Construir proyectos con alcance real",
    topics: [
      {
        label: "Patrones de diseno",
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
      "Proyectos con arquitectura inicial, criterios de publicacion y evidencia profesional.",
    status: "En revision",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/08-patrones",
    action: "Ver patrones",
  },
];

export const learningSections = [
  {
    title: "Fundamentos",
    status: "Disponible",
    description: "Base conceptual para iniciar la ruta con criterio y lenguaje comun.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/00-fundamentos",
  },
  {
    title: "Pseudocodigo",
    status: "Disponible",
    description: "Ejercicios del curso de Principios de Algoritmos organizados para practicar logica.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/01-pseudocodigo",
  },
  {
    title: "Programacion basica",
    status: "Disponible",
    description: "Practicas iniciales para traducir razonamiento a codigo ejecutable.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/02-programacion-basica",
  },
  {
    title: "POO",
    status: "Disponible",
    description: "Clases, objetos, encapsulamiento, herencia, abstraccion y polimorfismo.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/03-poo",
  },
  {
    title: "Estructuras de datos",
    status: "Disponible",
    description: "Listas, tablas hash y grafos para organizar informacion con criterio.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/04-estructuras-datos",
  },
  {
    title: "Algoritmos",
    status: "Disponible",
    description: "Busqueda, ordenamiento, recursion, backtracking y resolucion de problemas.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/05-algoritmos",
  },
  {
    title: "Bases de datos",
    status: "Disponible",
    description: "Modelado, SQL y criterios de publicacion segura de datos.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/06-bases-de-datos",
  },
  {
    title: "Desarrollo web",
    status: "Disponible",
    description: "HTML, CSS, JavaScript inicial y PHP desarrollado como avance academico.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/07-desarrollo-web",
  },
  {
    title: "Patrones de diseno",
    status: "Disponible",
    description: "SOLID, patrones creacionales, estructurales y casos integradores.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/08-patrones",
  },
  {
    title: "Backend",
    status: "En revision segura",
    description: "APIs, persistencia, seguridad, testing e integraciones con variables de entorno.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/09-backend",
  },
  {
    title: "Frontend moderno",
    status: "Reservado",
    description: "Se activara cuando existan practicas reales revisadas y aprobadas.",
    href: "https://github.com/chiletedevpath/aprendizaje/tree/main/10-frontend",
  },
];

export const techStack = [
  { name: "HTML", label: "HTML", tone: "markup" },
  { name: "CSS", label: "CSS", tone: "style" },
  { name: "JavaScript", label: "JS", tone: "script" },
  { name: "PHP", label: "PHP", tone: "server" },
  { name: "Java", label: "Java", tone: "java" },
  { name: "SQL", label: "SQL", tone: "data" },
  { name: "Spring Boot", label: "Spring", tone: "backend" },
  { name: "Astro", label: "Astro", tone: "web" },
];
