import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGenre } from '../../../shared/const/genres.const';

@Component({
  selector: 'app-select',
  imports: [CommonModule],
  template: `
    <div class="select-wrapper">
      <select
        [value]="selectedTarget"
        (change)="onSelectionChange($event)"
        class="custom-select">

        @for (option of options; track option.id) {
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
  @Input({ required: true }) options: IGenre[] = [];

  @Input() selectedTarget: any;

  @Output() selectionChange = new EventEmitter<any>();

  onSelectionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(value);
  }

}
