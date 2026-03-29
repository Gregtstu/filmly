import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Menu } from "../components/menu/menu";

@Component({
  selector: 'app-private',
  imports: [RouterOutlet, Menu],
  templateUrl: './private.html',
  styleUrl: './private.scss',
})
export class Private {

}
