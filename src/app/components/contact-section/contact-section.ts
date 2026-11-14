import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile.data';

/** Sección de contacto. */
@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  /** Datos del perfil. */
  readonly profile = PROFILE;
  /** URL del perfil de GitHub. */
  readonly githubUrl = `https://github.com/${PROFILE.githubUser}`;
}
