import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface Tile {
  backgroundImageUrl: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, backgroundImageUrl: 'url("/assets/topleft.jpg")', link: '/something' },
    { text: 'Two', cols: 3, rows: 1, backgroundImageUrl: 'url("/assets/topright.jpg")', link: '/something' },
    { text: 'Three', cols: 2, rows: 1, backgroundImageUrl: 'url("/assets/bottomleft.jpg")', link: '/something' },
    { text: 'Four', cols: 2, rows: 1, backgroundImageUrl: 'url("/assets/bottomcenter.jpg")', link: '/something' },
    { text: 'Four', cols: 2, rows: 1, backgroundImageUrl: 'url("/assets/bottomright.jpg")', link: '/something' },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  tileClicked(tile: Tile) {
    console.log(tile.text);

    //or navigation but fix up link values first
    //this.router.navigate([tile.link]);
  }

}
