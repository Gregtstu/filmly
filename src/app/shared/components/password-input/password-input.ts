import { Component, Input } from '@angular/core';

export enum EPasswordInputIcons {
  Opened = 'icons/eye_opened.svg',
  Closed = 'icons/eye_closed.svg',
}

@Component({
  selector: 'app-password-input',
  imports: [],
  templateUrl: './password-input.html',
  styleUrl: './password-input.scss',
})
export class PasswordInput {
  private innerValue = '';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (value: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => void = () => {};

  @Input() iconUrl: string | null = null;
  @Input() placeholder = '';
  disabled = false;

  type = 'password';
  buttonIcon = EPasswordInputIcons.Closed;

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

  onButtonToggleClick(): void {
    if (this.type === 'password') {
      this.type = 'text';
      this.buttonIcon = EPasswordInputIcons.Opened;
    } else {
      this.type = 'password';
      this.buttonIcon = EPasswordInputIcons.Closed;
    }
  }
}
