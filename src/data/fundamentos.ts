export const fundamentalsSource = "https://github.com/chiletedevpath/aprendizaje/blob/main/00-fundamentos/";

export const fundamentalBlocks = [
  { id: "datos", es: "Datos e información", en: "Data and information", exercises: [1] },
  { id: "problema", es: "Problema, objetivo y alcance", en: "Problem, goal and scope", exercises: [2, 3] },
  { id: "organizacion", es: "Descomposición y abstracción", en: "Decomposition and abstraction", exercises: [4, 5] },
  { id: "flujo", es: "Entrada, proceso y salida", en: "Input, processing and output", exercises: [6] },
  { id: "pruebas", es: "Validación y pruebas", en: "Validation and testing", exercises: [7, 8, 9] },
  { id: "evidencia", es: "Evidencia y comunicación", en: "Evidence and communication", exercises: [10] },
];

export const fundamentalExercises = [
  ["01-datos-e-informacion", "Datos e información", "Data and information"],
  ["02-delimitar-problema", "Delimitar un problema", "Define a problem"],
  ["03-requisitos-y-limites", "Requisitos y límites", "Requirements and limits"],
  ["04-descomposicion", "Descomposición", "Decomposition"],
  ["05-abstraccion", "Abstracción", "Abstraction"],
  ["06-entrada-proceso-salida", "Entrada, proceso y salida", "Input, processing and output"],
  ["07-casos-de-prueba", "Casos de prueba", "Test cases"],
  ["08-error-logico", "Error lógico", "Logic errors"],
  ["09-validaciones-y-reglas", "Validaciones y reglas", "Validation and rules"],
  ["10-evidencia", "Evidencia", "Evidence"],
].map(([file, es, en]) => ({ file: `ejercicios-propuestos/${file}.md`, es, en }));

export const fundamentalLabs = [
  { file: "laboratorios/01-sistema-turnos.md", es: "Sistema de turnos de atención", en: "Service queue system" },
  { file: "laboratorios/02-solucion-defectuosa.md", es: "Revisión de una solución defectuosa", en: "Review a flawed solution" },
  { file: "laboratorios/03-propuesta-solucion.md", es: "Propuesta de una solución pequeña", en: "Propose a small solution" },
];

export const fundamentalCopy = {
  es: {
    title: "Fundamentos", intro: "Antes de escribir código, aprende a entender el problema.",
    description: "Delimita una necesidad, organiza una solución y comprueba tu razonamiento con casos de prueba.",
    prerequisite: "No necesitas experiencia previa ni un lenguaje de programación. Trabaja con situaciones sencillas y registra tus decisiones.",
    objectives: ["Delimitar un problema y su resultado esperado.", "Distinguir requisitos, reglas, restricciones y supuestos.", "Descomponer una situación e identificar entrada, proceso y salida.", "Diseñar casos normales, límite e inválidos.", "Explicar las correcciones y conservar evidencia del proceso."],
    criteria: ["Completa los ejercicios con un primer intento propio.", "Documenta al menos un laboratorio.", "Compara tu razonamiento con las soluciones y explica las diferencias.", "Revisa el checklist: debes poder delimitar, ordenar, comprobar y explicar una solución."],
  },
  en: {
    title: "Fundamentals", intro: "Before writing code, learn to understand the problem.",
    description: "Define a need, organise a solution and check your reasoning with test cases.",
    prerequisite: "No previous experience or programming language is required. Work with simple situations and record your decisions.",
    objectives: ["Define a problem and its expected outcome.", "Distinguish requirements, rules, constraints and assumptions.", "Break down a situation and identify input, processing and output.", "Design normal, boundary and invalid test cases.", "Explain corrections and keep evidence of the process."],
    criteria: ["Make your own first attempt at the exercises.", "Document at least one lab.", "Compare your reasoning with the solutions and explain the differences.", "Review the checklist: you should be able to define, organise, test and explain a solution."],
  },
};
