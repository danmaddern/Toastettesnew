import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface MenuTile {
  backgroundImageUrl: string;
  cols: number;
  rows: number;
  text: string;

}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  tiles: MenuTile[] = [
    { text: 'Cheese & Hamm', cols: 3, rows: 1, backgroundImageUrl: 'url("/assets/topleft.jpg")'},
    { text: 'Lamb & Pea', cols: 3, rows: 1, backgroundImageUrl: 'url("/assets/topright.jpg")'},
    { text: 'Three', cols: 2, rows: 1, backgroundImageUrl: 'url("/assets/bottomleft.jpg")'},
    { text: 'Four', cols: 2, rows: 1, backgroundImageUrl: 'url("/assets/bottomcenter.jpg")'},
    { text: 'Four', cols: 2, rows: 1, backgroundImageUrl: 'url("/assets/bottomright.jpg")'},
  ];
  breakpoint: number;

  constructor(private router: Router) { }

/*   tileClicked(tile: MenuTile) {
    console.log(tile.text);

    // or navigation but fix up link values first
    this.router.navigate([tile.link]); */
  
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}


