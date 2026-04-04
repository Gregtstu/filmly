import { Component } from '@angular/core';
import { MOVIES } from '../../../shared/const/fake-films.const';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  public movies = MOVIES;
}
