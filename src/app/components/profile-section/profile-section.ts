import { Component, computed } from '@angular/core';
import { PROFILE } from '../../data/profile.data';
import { PROJECTS } from '../../data/projects.data';

/** Sección de perfil profesional: presentación, habilidades, lenguajes y tecnologías. */
@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.html',
  styleUrl: './profile-section.scss',
})
export class ProfileSection {
  /** Datos del perfil. */
  readonly profile = PROFILE;

  /** Tecnologías declaradas en el perfil o, si no hay, las usadas en los proyectos. */
  readonly technologies = computed(() =>
    this.profile.tecnologias.length > 0
      ? this.profile.tecnologias
      : [...new Set(PROJECTS.flatMap((p) => p.tecnologias))],
  );
}
