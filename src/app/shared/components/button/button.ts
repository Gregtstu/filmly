import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() disabled = false;

  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();
  @ContentChild('buttonContent') btnRef: ElementRef | undefined;

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
