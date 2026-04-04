import { Component } from '@angular/core';
import { FAVORITES } from '../../../shared/const/fake-favorites.const';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  public favorites = FAVORITES;
}
