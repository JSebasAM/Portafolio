import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ABOUT_HIGHLIGHTS,
  PROFILE,
  PROGRAMMING_LANGUAGES,
  SKILL_CATEGORIES,
  SPOKEN_LANGUAGES,
} from '../../data/profile.data';
import { PROJECTS } from '../../data/projects.data';

/**
 * Sección principal de perfil profesional: Hero, Sobre Mí, Habilidades y Lenguajes.
 * Diseñado bajo estética de Minimalismo Técnico / Editorial.
 */
@Component({
  selector: 'app-profile-section',
  imports: [RouterLink],
  templateUrl: './profile-section.html',
  styleUrl: './profile-section.scss',
})
export class ProfileSection {
  /** Perfil profesional base. */
  readonly profile = PROFILE;

  /** Puntos clave para la columna derecha de Sobre Mí. */
  readonly aboutHighlights = ABOUT_HIGHLIGHTS;

  /** 3 Categorías Bento de habilidades técnicas. */
  readonly skillCategories = SKILL_CATEGORIES;

  /** Bloque A: Lenguajes de programación con contexto de aplicación. */
  readonly programmingLanguages = PROGRAMMING_LANGUAGES;

  /** Bloque B: Idiomas con nivel de suficiencia. */
  readonly spokenLanguages = SPOKEN_LANGUAGES;

  /** URL directa de GitHub del desarrollador. */
  readonly githubUrl = `https://github.com/${PROFILE.githubUser}`;

  /** Tecnologías activas combinando perfil y proyectos. */
  readonly technologies = computed(() =>
    this.profile.tecnologias.length > 0
      ? this.profile.tecnologias
      : [...new Set(PROJECTS.flatMap((p) => p.tecnologias))],
  );
}
