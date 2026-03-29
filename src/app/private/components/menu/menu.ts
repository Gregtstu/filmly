import { Component } from '@angular/core';

export interface IMenu {
    title: string | null;
    iconUrl?: string;
    link: string;
}

export const menu: IMenu[] = [
  {
    title: 'Комедия',
    link: '/comedy',
  },
   {
    title: 'Фантастика',
    link: '/fantasy',
  }
];

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

}
