import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from '../../../shared/components/input/input';
import { Button } from '../../../shared/components/button/button';
import { PasswordInput } from '../../../shared/components/password-input/password-input';
import { Login } from '../login/login';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
   onInputChange(value: string): void {
    console.log('Контрол изменился:', value);
  }
}
