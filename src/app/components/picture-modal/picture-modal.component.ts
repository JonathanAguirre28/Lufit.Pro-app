import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { PictureModalService } from 'src/app/services/picture-modal.service';

@Component({
  selector: 'app-picture-modal',
  templateUrl: './picture-modal.component.html',
  styleUrls: ['./picture-modal.component.scss'],
})
export class PictureModalComponent implements OnInit, OnDestroy {
  images!: GalleryItem[];

  galleryOptions: any = {
    thumbnails: true,
    imageSwipe: true,
    imageSize: 'cover',
    // Add more options as per your requirement
  };

  constructor(private pictureModalService: PictureModalService) {}

  ngOnInit() {
    this.images = [
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (1).jpg',
        thumb: 'assets/gallery/Lu Corzo (1).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (7).jpg',
        thumb: 'assets/gallery/Lu Corzo (7).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (8).jpg',
        thumb: 'assets/gallery/Lu Corzo (8).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (9).jpg',
        thumb: 'assets/gallery/Lu Corzo (9).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (10).jpg',
        thumb: 'assets/gallery/Lu Corzo (10).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (11).jpg',
        thumb: 'assets/gallery/Lu Corzo (11).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (12).jpg',
        thumb: 'assets/gallery/Lu Corzo (12).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (13).jpg',
        thumb: 'assets/gallery/Lu Corzo (13).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (14).jpg',
        thumb: 'assets/gallery/Lu Corzo (14).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (15).jpg',
        thumb: 'assets/gallery/Lu Corzo (15).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (16).jpg',
        thumb: 'assets/gallery/Lu Corzo (16).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (17).jpg',
        thumb: 'assets/gallery/Lu Corzo (17).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (18).jpg',
        thumb: 'assets/gallery/Lu Corzo (18).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (19).jpg',
        thumb: 'assets/gallery/Lu Corzo (19).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (20).jpg',
        thumb: 'assets/gallery/Lu Corzo (20).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (21).jpg',
        thumb: 'assets/gallery/Lu Corzo (21).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (22).jpg',
        thumb: 'assets/gallery/Lu Corzo (22).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (23).jpg',
        thumb: 'assets/gallery/Lu Corzo (23).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (24).jpg',
        thumb: 'assets/gallery/Lu Corzo (24).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (25).jpg',
        thumb: 'assets/gallery/Lu Corzo (25).jpg',
      }),
      new ImageItem({
        src: 'assets/gallery/Lu Corzo (26).jpg',
        thumb: 'assets/gallery/Lu Corzo (26).jpg',
      }),
    ];
  }

  ngOnDestroy(): void {
    this.pictureModalService.setIsOpen(true)
    setTimeout(()=>{
      this.pictureModalService.setIsOpen(false)
    },1500)

  }
}
