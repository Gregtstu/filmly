import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input';
import { Button } from '../../shared/components/button/button';
import { PasswordInput } from '../../shared/components/password-input/password-input';

@Component({
  selector: 'app-layout',
  imports: [InputComponent, Button, PasswordInput],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
   onInputChange(value: string): void {
    console.log('Контрол изменился:', value);
  }
}
