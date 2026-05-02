import { Component, input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  prefixIcon = input<string>();
  postfixIcon = input<string>();

  type = input<'text' | 'email'>('text');
  placeholder = input<string>('');

  innerValue = '';
  disabled = false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (value: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.innerValue = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.innerValue = value;
    this.onChange(value);
    this.onTouched();
  }
}
