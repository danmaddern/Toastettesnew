import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
// import {Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize} from '@ngx-gallery/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  // items: GalleryItem[];

  // imageData = data;

  constructor() {
  //  public gallery: Gallery, public lightbox: Lightbox
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSwipe: true,
        thumbnailsSwipe: true,
        previewSwipe: true,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        imageSwipe: true,
        thumbnailsSwipe: true,
        previewSwipe: true,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true,
        imageSwipe: true,
        thumbnailsSwipe: true,
        previewSwipe: true,
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/bread-philo1.jpg',
        medium: 'assets/bread-philo1.jpg',
        big: 'assets/bread-philo1.jpg'
      },
      {
        small: 'assets/Toastettes-blackoutline-01.jpg',
        medium: 'assets/Toastettes-blackoutline-01.jpg',
        big: 'assets/Toastettes-blackoutline-01.jpg'
      },
      {
        small: 'assets/bottomcenter.jpg',
        medium: 'assets/bottomcenter.jpg',
        big: 'assets/bottomcenter.jpg'
      }
    ];
  }
}
