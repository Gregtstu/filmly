import { Component } from '@angular/core';

export interface IMenu {
    title: string | null;
    iconUrl?: string;
    link: string;
}

export const menu: IMenu[] = [
  {
    title: 'Комедия',
    link: '/private/home',
  },
   {
    title: 'Фантастика',
    link: '/private/favorites',
  }
];

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  menu = menu;
}
