import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input';
import { Button } from '../../../shared/components/button/button';
import { PasswordInput } from '../../../shared/components/password-input/password-input';

@Component({
  selector: 'app-login',
  imports: [InputComponent, Button, PasswordInput],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
