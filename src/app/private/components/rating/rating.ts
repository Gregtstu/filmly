import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
   template: `
    <div class="stars">
      @for (star of [1, 2, 3, 4, 5]; track star) {
        <span [class.filled]="star <= value">★</span>
      }
    </div>
  `,
  styleUrl: './rating.scss',
})
export class Rating {
  @Input() value: number = 0;
}
