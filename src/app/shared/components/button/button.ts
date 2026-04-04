import {
  Component,
  ContentChild,
  ElementRef,
  input,
  output
} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  disabled = input(false);
  btnClick = output();

  @ContentChild('buttonContent') btnRef: ElementRef | undefined;

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
