import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { MOVIES } from '../../../shared/const/fake-films.const';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public movies = MOVIES
}
