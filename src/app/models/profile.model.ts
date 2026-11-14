/** Datos del perfil profesional. Los campos vacíos se muestran como "Pendiente de completar". */
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
