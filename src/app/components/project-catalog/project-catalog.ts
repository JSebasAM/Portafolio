import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { ProjectCard } from '../project-card/project-card';

/** Catálogo con la cuadrícula de proyectos del portafolio. */
@Component({
  selector: 'app-project-catalog',
  imports: [ProjectCard],
  templateUrl: './project-catalog.html',
  styleUrl: './project-catalog.scss',
})
export class ProjectCatalog {
  /** Proyectos mostrados en el catálogo. */
  readonly projects = PROJECTS;
}
