import { Component, inject, OnInit } from '@angular/core';
import { FAVORITES } from '../../../shared/const/fake-favorites.const';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../../shared/services/store.service';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites implements OnInit {
  private store: StoreService = inject(StoreService);
  public  favorites$ = this.store.favorites$;

  ngOnInit() {
    this.store.updateData({ favorites: FAVORITES });
  }
}
