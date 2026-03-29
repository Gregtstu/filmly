import { Component } from '@angular/core';

export interface IMenu {
    title: string | null;
    iconUrl: string;
    link: string;
}

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

}
