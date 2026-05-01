import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Menu } from "../components/menu/menu";
import { Select } from '../components/select/select';
import { GENRES } from '../../shared/const/genres.const';
import { StoreService } from '../../shared/services/store.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-private',
  imports: [RouterOutlet, Menu, Select, AsyncPipe],
  templateUrl: './private.html',
  styleUrl: './private.scss',
})
export class Private implements OnInit {
  private store: StoreService = inject(StoreService);
  public genres$ = this.store.genres$;

  ngOnInit() {
    this.store.updateData({ genres: GENRES });
  }

  handleChange(value: string) {
    console.log('Выбран:', value);
  }
}
