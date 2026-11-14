import { Project } from '../models/project.model';

const OWNER = 'JSebasAM';
const GITHUB = `https://github.com/${OWNER}`;
const PAGES = `https://${OWNER}.github.io`;

/** Catálogo único de proyectos del portafolio. */
export const PROJECTS: Project[] = [
  {
    nombre: 'Portafolio',
    descripcion:
      'Portafolio digital que presenta mi perfil y el catálogo de proyectos de Arquitectura de Software.',
    tecnologias: ['Angular 20', 'TypeScript', 'SCSS', 'GitHub Actions', 'GitHub Pages'],
    caracteristicas: [
      'Componentes standalone',
      'Catálogo alimentado desde un único archivo de datos tipado',
      'Diseño responsive y accesible',
      'Despliegue automático con pipeline',
    ],
    repoUrl: `${GITHUB}/Portafolio`,
    demoUrl: `${PAGES}/Portafolio/`,
  },
  {
    nombre: 'Pipelines Hash Strategy',
    descripcion: 'Aplicación Angular con HashLocationStrategy que consume PokéAPI y Kitsu.',
    tecnologias: ['Angular 20', 'HashLocationStrategy', 'PokéAPI', 'Karma', 'GitHub Actions'],
    caracteristicas: [
      'Navegación con rutas por hash',
      'Lista y filtro de Pokémon por tipo',
      'Lista de anime',
      'Pipeline con build, deploy y verificación',
    ],
    repoUrl: `${GITHUB}/pipelines-hash-strategy`,
    demoUrl: `${PAGES}/pipelines-hash-strategy/`,
  },
  {
    nombre: 'Astro SSG + Angular SPA',
    descripcion:
      'Monorepo con un sitio estático Astro (SSG) y una aplicación Angular (SPA) publicados en un mismo sitio.',
    tecnologias: ['Astro', 'Angular 20', 'Jest', 'Bootstrap', 'GitHub Actions'],
    caracteristicas: [
      'Sitio Astro en la raíz y Angular en /angular/',
      'Un único workflow y un solo artefacto de Pages',
      'Comparación entre renderizado estático y SPA',
    ],
    repoUrl: `${GITHUB}/taller-4-astro-angular-ssg-spa`,
    demoUrl: `${PAGES}/taller-4-astro-angular-ssg-spa/`,
  },
  {
    nombre: 'Angular + Node.js (Cliente-Servidor)',
    descripcion:
      'Cliente Angular de una arquitectura cliente-servidor; en Pages funciona en modo demo con datos simulados.',
    tecnologias: ['Angular 20', 'Node.js', 'Express', 'Jest', 'GitHub Actions'],
    caracteristicas: [
      'Modo demo con datos simulados (sin backend)',
      'Módulos de usuarios, productos, proveedores, órdenes y tickets',
      'Pruebas unitarias con Jest',
    ],
    repoUrl: `${GITHUB}/taller-4-angular-nodejs-taller-client-server`,
    demoUrl: `${PAGES}/taller-4-angular-nodejs-taller-client-server/`,
  },
  {
    nombre: 'Patrones de Arquitectura',
    descripcion:
      'Catálogo interactivo de patrones de arquitectura de software con búsqueda, filtros y favoritos.',
    tecnologias: ['Angular 20', 'TypeScript', 'Jest', 'Compodoc', 'GitHub Actions'],
    caracteristicas: [
      'Búsqueda y filtro por categoría',
      'Vista de detalle y favoritos',
      'Modo oscuro',
    ],
    repoUrl: `${GITHUB}/Patrones-de-Arquitectura`,
    demoUrl: `${PAGES}/Patrones-de-Arquitectura/`,
  },
];
