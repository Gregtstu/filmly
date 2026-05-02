import { Component, inject, DestroyRef } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { InputComponent } from '../../../shared/components/input/input';
import { PasswordInput } from '../../../shared/components/password-input/password-input';
import { Button } from '../../../shared/components/button/button';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
/* ... остальные импорты ... */

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, PasswordInput, Button],
  templateUrl: './login.html',
})
export class Login {
  private _authServ = inject(AuthService);
  private _router = inject(Router);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  isSubmitDisabled = toSignal(
    this.form.statusChanges.pipe(map(() => this.form.invalid)),
    { initialValue: true }
  );

  onLogin() {
    if (this.form.valid) {
      this._authServ.isAuthenticated = true;
      this._router.navigate(['/private']);
    }
  }
}
