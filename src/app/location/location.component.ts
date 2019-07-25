import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {} from 'googlemaps';




@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],

})
export class LocationComponent implements OnInit, AfterViewInit {
  @ViewChild('map', {static: true}) private mapElement: ElementRef;
  map: google.maps.Map;
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
  }

}
