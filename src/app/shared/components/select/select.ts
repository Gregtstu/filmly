import { Component, input, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IGenre } from '../../../shared/const/genres.const';

@Component({
  selector: 'app-select',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Select),
    multi: true
  }],
  template: `
    <div class="select-wrapper">
      <select [disabled]="disabled" (change)="onSelectionChange($event)" class="custom-select">
        <option value="" disabled [selected]="!value()">Выберите жанр</option>
        @for (option of options(); track option.id) {
          <option [value]="option.id" [selected]="option.id === value()">
            {{ option.name }}
          </option>
        }
      </select>
    </div>
  `
})
export class Select implements ControlValueAccessor {
  options = input.required<IGenre[] | null>();
  value = signal<any>(null);
  disabled = false;

  onChange: (v: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(v: any) { this.value.set(v); }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.disabled = d; }

  onSelectionChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    this.value.set(val);
    this.onChange(val);
  }
}
