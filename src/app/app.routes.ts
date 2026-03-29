import { Routes } from '@angular/router';
import { Login } from './public/pages/login/login';
import { Private } from './private/_layout/private';
import { Home } from './private/pages/home/home';
import { Favorites } from './private/pages/favorites/favorites';
import { Layout } from './public/_layout/layout';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'public',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'log-in',
        pathMatch: 'full'
      },
      {
        path: 'log-in',
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
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'favorites',
        component: Favorites,
      },
      {
        path: '**',
        redirectTo: '/home',
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'public',
  },
];
