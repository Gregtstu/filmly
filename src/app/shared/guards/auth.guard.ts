import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';


export const authGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
    const authService = inject(AuthService);
  const router = inject(Router);
  const isAuth = authService.isAuthenticated;

  if (isAuth) {
    return true;
  }

  return router.parseUrl('/public/login');
};
