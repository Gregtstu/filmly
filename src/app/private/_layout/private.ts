import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Menu } from "../components/menu/menu";
import { Select } from '../components/select/select';
import { GENRES } from '../../shared/const/genres.const';

@Component({
  selector: 'app-private',
  imports: [RouterOutlet, Menu, Select],
  templateUrl: './private.html',
  styleUrl: './private.scss',
})
export class Private {
  public genres = GENRES;
  handleChange(value: string) {
    console.log('Выбран:', value);
  }
}
