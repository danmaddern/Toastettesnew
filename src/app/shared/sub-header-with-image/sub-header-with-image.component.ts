import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-header-with-image',
  templateUrl: './sub-header-with-image.component.html',
  styleUrls: ['./sub-header-with-image.component.scss']
})
export class SubHeaderWithImageComponent implements OnInit {
  @Input() public title: string;
  constructor() { }

  ngOnInit() {
  }

}
