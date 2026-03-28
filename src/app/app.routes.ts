import { Routes } from '@angular/router';
import { Layout } from './public/pages/_layout/layout';
import { Home } from './private/home/home';
import { Favorites } from './private/favorites/favorites';
import { Private } from './private/private/private';
import { Login } from './public/pages/login/login';

export const routes: Routes = [
  {
    path: 'public',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: Login,
      },
      {
        path: '**',
        redirectTo: 'public',
      }
    ],
  },
  {
    path: 'private',
    component: Private,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'favorites',
        component: Favorites
      },
      {
        path: '**',
        redirectTo: 'private',
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'public',
  },
];
