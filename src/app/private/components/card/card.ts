import { Component, input } from '@angular/core';
import { Rating } from '../rating/rating';
import { IMovie } from '../../../shared/models/movie.model';

@Component({
  selector: 'app-card',
  imports: [Rating],
  template: `
    <div class="movie-card">
      <img [src]="movie().posterUrl" [alt]="movie().title">
      <h3>{{ movie().title }}</h3>
      <p>{{ movie().description }}</p>
      <app-rating [value]="movie().rating"></app-rating>
    </div>
    `,
  styleUrl: './card.scss',
})
export class Card {
  movie = input.required<IMovie>();
}
