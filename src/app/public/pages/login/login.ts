import { AuthService } from './../../../shared/services/auth.service';
import { Component, inject } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input';
import { Button } from '../../../shared/components/button/button';
import { PasswordInput } from '../../../shared/components/password-input/password-input';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [InputComponent, Button, PasswordInput],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private _router: Router = inject(Router);
  private _authServ: AuthService = inject(AuthService);

  onLogin() {
    this._authServ.isAuthenticated = true;
    this._router.navigate(['/private']);
  }
}
