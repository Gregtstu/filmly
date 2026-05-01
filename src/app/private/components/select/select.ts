import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { IGenre } from '../../../shared/const/genres.const';

@Component({
  selector: 'app-select',
  imports: [CommonModule],
  template: `
    <div class="select-wrapper">
      <select
        [value]="selectedTarget()"
        (change)="onSelectionChange($event)"
        class="custom-select">

        @for (option of options(); track option.id) {
          <option [value]="option.name">
            {{ option.name }}
          </option>
        } @empty {
          <option disabled>Список пуст</option>
        }

      </select>
          </div>
  `,
  styleUrl: './select.scss',
})
export class Select {
  options = input.required<IGenre[] | null>();
  selectedTarget = input();

  selectionChange = output<any>();

  onSelectionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(value);
  }

}
