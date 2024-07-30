import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss'],
})
export class BeforeAfterComponent {
  images!: GalleryItem[];

  galleryOptions: any = {
    thumbnails: true,
    imageSwipe: true,
    imageSize: 'cover',
    // Add more options as per your requirement
  };

  ngOnInit() {
    this.images = [
      new ImageItem({
        src: 'assets/before-after/00.jpeg',
        thumb: 'assets/before-after/00.jpeg',
      }),
      new ImageItem({
        src: 'assets/before-after/0.jpeg',
        thumb: 'assets/before-after/0.jpeg',
      }),
      new ImageItem({
        src: 'assets/before-after/1.jpeg',
        thumb: 'assets/before-after/1.jpeg',
      }),
      new ImageItem({
        src: 'assets/before-after/2.jpeg',
        thumb: 'assets/before-after/2.jpeg',
      }),
      new ImageItem({
        src: 'assets/before-after/3.jpeg',
        thumb: 'assets/before-after/3.jpeg',
      }),
      new ImageItem({
        src: 'assets/before-after/4.jpeg',
        thumb: 'assets/before-after/4.jpeg',
      }),
      new ImageItem({
        src: 'assets/before-after/5.jpeg',
        thumb: 'assets/before-after/5.jpeg',
      }),
      new ImageItem({
        src: 'assets/before-after/6.jpeg',
        thumb: 'assets/before-after/6.jpeg',
      }),
    ];
  }
}
