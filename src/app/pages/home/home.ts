import { Component } from '@angular/core';
import { ContactSection } from '../../components/contact-section/contact-section';
import { ProfileSection } from '../../components/profile-section/profile-section';
import { ProjectCatalog } from '../../components/project-catalog/project-catalog';

/** Página principal del portafolio: perfil, catálogo y contacto. */
@Component({
  selector: 'app-home',
  imports: [ProfileSection, ProjectCatalog, ContactSection],
  template: `
    <app-profile-section />
    <app-project-catalog />
    <app-contact-section />
  `,
})
export class Home {}
