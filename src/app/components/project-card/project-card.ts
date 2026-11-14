import { Component, input } from '@angular/core';
import { Project } from '../../models/project.model';

/** Tarjeta que muestra un proyecto con enlaces al repositorio y a la aplicación. */
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  /** Proyecto a mostrar. */
  readonly project = input.required<Project>();
}
