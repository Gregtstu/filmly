import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { DestroyRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

export class Login {
  private _destroyRef = inject(DestroyRef);
  private _router = inject(Router);
  private _authServ = inject(AuthService);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  isSubmitDisabled = toSignal(
    this.form.statusChanges.pipe(
      map(() => this.form.invalid || this.form.pristine)
    ),
    { initialValue: true }
  );

  constructor() {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(val => console.log('Login Form Change:', val));
  }

  onLogin() {
    if (this.form.valid) {
      this._authServ.isAuthenticated = true;
      this._router.navigate(['/private']);
    }
  }
}
