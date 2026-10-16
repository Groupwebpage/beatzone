import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((module) => module.HomeComponent)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details/details.component').then((module) => module.DetailsComponent)
  },
  { path: '**', redirectTo: '' }
];
