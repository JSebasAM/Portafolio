/** Proyecto presentado en el catálogo del portafolio. */
export interface Project {
  /** Nombre visible del proyecto. */
  nombre: string;
  /** Descripción breve. */
  descripcion: string;
  /** Tecnologías utilizadas. */
  tecnologias: string[];
  /** Características principales. */
  caracteristicas: string[];
  /** URL del repositorio en GitHub. */
  repoUrl: string;
  /** URL de la aplicación desplegada en GitHub Pages. */
  demoUrl: string;
}
