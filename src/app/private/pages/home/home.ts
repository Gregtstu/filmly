import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../../components/card/card';
import { MOVIES } from '../../../shared/const/fake-films.const';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../../shared/services/store.service';
import { GENRES } from '../../../shared/const/genres.const';

@Component({
  selector: 'app-home',
  imports: [Card, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private store: StoreService = inject(StoreService);
  public  movies$ = this.store.movies$;

  ngOnInit() {
    this.store.updateData({ movies: MOVIES, genres: GENRES });
  }
}
