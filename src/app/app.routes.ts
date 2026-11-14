import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Portafolio | José Sebastián Arenas Moncada' },
  { path: '**', redirectTo: '' },
];
