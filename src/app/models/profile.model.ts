/**
 * Modelos de datos para el perfil profesional y secciones del portafolio.
 */

export interface Profile {
  nombre: string;
  githubUser: string;
  bio: string;
  habilidades: string[];
  lenguajes: string[];
  tecnologias: string[];
  email: string;
  linkedinUrl: string;
}

export interface AboutHighlight {
  label: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface ProgrammingLanguage {
  name: string;
  context: string;
  tag: string;
}

export interface SpokenLanguage {
  name: string;
  level: string;
  description: string;
}
