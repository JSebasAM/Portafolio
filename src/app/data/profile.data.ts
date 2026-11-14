import {
  AboutHighlight,
  Profile,
  ProgrammingLanguage,
  SkillCategory,
  SpokenLanguage,
} from '../models/profile.model';

/**
 * Perfil profesional principal.
 */
export const PROFILE: Profile = {
  nombre: 'José Sebastián Arenas Moncada',
  githubUser: 'JSebasAM',
  bio: 'Estudiante de Arquitectura de Software enfocado en la construcción de sistemas robustos, arquitectura limpia y soluciones web de alto rendimiento.',
  habilidades: [
    'Angular',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Bootstrap / Diseño Responsivo',
    'RxJS',
    'Java',
    'Python',
    'APIs REST',
    'SQL',
    'Linux',
    'Arquitectura de Software / Microservicios',
    'Git',
    'GitHub',
    'VS Code',
    'Docker',
    'Metodologías Ágiles',
  ],
  lenguajes: [
    'TypeScript / JavaScript — Desarrollo Web',
    'Java — Backend y Concurrencia',
    'Python — Scripting y Datos',
    'SQL — Bases de Datos',
    'Español (Nativo)',
    'Inglés (Lectura técnica fluida / Conversacional)',
  ],
  tecnologias: [
    'Angular 20',
    'TypeScript',
    'SCSS',
    'RxJS',
    'Node.js',
    'Express',
    'Astro',
    'Docker',
    'Git / GitHub Actions',
    'Karma & Jasmine',
  ],
  email: 'jsebas.arenas@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/jsebasam',
};

/**
 * Puntos clave de la sección "Sobre Mí" (columna derecha en formato Bento).
 */
export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    label: '01 // ENFOQUE PRINCIPAL',
    title: 'Desarrollo Web & Sistemas Escalables',
    description:
      'Construcción de aplicaciones modernas Single Page Applications (SPA) con Angular y TypeScript, orientadas a la alta fidelidad visual y separación de responsabilidades.',
  },
  {
    label: '02 // ARQUITECTURA & BUENAS PRÁCTICAS',
    title: 'Clean Architecture & Principios SOLID',
    description:
      'Diseño modular desacoplado, testing unitario automatizado y flujos de integración y despliegue continuo (CI/CD) reproducibles.',
  },
  {
    label: '03 // UBICACIÓN / MODALIDAD',
    title: 'Colombia · Remoto / Híbrido',
    description:
      'Disponible para colaborar en proyectos globales bajo huso horario UTC-5, adaptabilidad a metodologías ágiles y entornos distribuidos.',
  },
];

/**
 * Categorías de habilidades técnicas organizadas en tarjetas Bento.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & UI',
    description:
      'Interfaces de usuario reactivas, accesibles y optimizadas para rendimiento y mantenibilidad.',
    icon: 'layout',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Bootstrap / Diseño Responsivo',
      'RxJS',
    ],
  },
  {
    title: 'Backend, Sistemas & Datos',
    description:
      'Lógica de negocio robusta, APIs seguras y persistencia estructurada con modelado eficiente.',
    icon: 'server',
    skills: [
      'Java',
      'Python',
      'APIs REST',
      'SQL',
      'Linux',
      'Arquitectura de Software / Microservicios',
    ],
  },
  {
    title: 'Herramientas & Flujo de Trabajo',
    description:
      'Ecosistema de desarrollo moderno, control de versiones riguroso y automatización de procesos.',
    icon: 'tool',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Metodologías Ágiles'],
  },
];

/**
 * Bloque A — Lenguajes de Programación con contexto técnico de aplicación.
 */
export const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
  {
    name: 'TypeScript / JavaScript',
    context: 'Desarrollo Web',
    tag: 'Frontend & SPA Reactivo',
  },
  {
    name: 'Java',
    context: 'Backend y Concurrencia',
    tag: 'Sistemas & POO Robusta',
  },
  {
    name: 'Python',
    context: 'Scripting y Datos',
    tag: 'Automatización & Algoritmos',
  },
  {
    name: 'SQL',
    context: 'Bases de Datos',
    tag: 'Modelado Relacional & Consultas',
  },
];

/**
 * Bloque B — Idiomas con nivel de suficiencia comunicativa y técnica.
 */
export const SPOKEN_LANGUAGES: SpokenLanguage[] = [
  {
    name: 'Español',
    level: 'Nativo',
    description:
      'Comunicación fluida y precisa para argumentación técnica, liderazgo de requerimientos y documentación formal.',
  },
  {
    name: 'Inglés',
    level: 'Lectura técnica fluida / Conversacional (B2)',
    description:
      'Capacidad solvente para lectura ágil de documentación oficial, análisis de RFCs/especificaciones y comunicación oral en equipos multiculturales.',
  },
];
