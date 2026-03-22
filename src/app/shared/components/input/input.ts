import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [JsonPipe],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  private innerValue = '';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (value: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => void = () => {};

  @Input() iconUrl: string | null = null;
  @Input() type: 'text' | 'email' = 'text';
  @Input() placeholder = '';

  disabled = false;

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
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.innerValue = value;
    this.onChange(value);
    this.onTouched();
  }
}
