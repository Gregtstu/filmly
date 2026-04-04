import { Component } from '@angular/core';
import { FAVORITES } from '../../../shared/const/fake-favorites.const';
import { delay, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  public favorites$ =  of(FAVORITES).pipe(delay(1000));
}
