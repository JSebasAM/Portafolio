import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PROFILE } from './data/profile.data';

/** Componente raíz: encabezado con navegación, contenido y pie de página. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  /** Nombre mostrado en el encabezado. */
  protected readonly nombre = PROFILE.nombre;
  /** Año actual para el pie de página. */
  protected readonly year = new Date().getFullYear();
}
