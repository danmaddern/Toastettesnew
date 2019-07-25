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
    { text: 'Our Story', cols: 4, rows: 1, backgroundImageUrl: 'url("/assets/topleft.jpg")', link: '/about' , },
    { text: 'Menu', cols: 4, rows: 1, backgroundImageUrl: 'url("/assets/topright.jpg")', link: '/menu' },
    { text: 'Gallery', cols: 2, rows: 1, backgroundImageUrl: 'url("/assets/bottomleft.jpg")', link: '/home' },
    { text: 'Contact', cols: 2, rows: 1, backgroundImageUrl: 'url("/assets/bottomcenter.jpg")', link: '/contact' },
    { text: 'Our Location', cols: 4, rows: 1, backgroundImageUrl: 'url("/assets/bottomright.jpg")', link: '/location' },
  ];
  breakpoint: number;

  constructor(private router: Router) { }

  tileClicked(tile: Tile) {
    console.log(tile.text);

    // or navigation but fix up link values first
    this.router.navigate([tile.link]);
  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 6;
  }

  onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 6;
  }

}
