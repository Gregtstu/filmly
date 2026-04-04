import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { MOVIES } from '../../../shared/const/fake-films.const';
import { CommonModule } from '@angular/common';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [Card, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public movies$ = of(MOVIES).pipe(delay(1000));
}
