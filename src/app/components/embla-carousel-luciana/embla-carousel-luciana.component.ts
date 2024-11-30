import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import { ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-embla-carousel-luciana',
  templateUrl: './embla-carousel-luciana.component.html',
  styleUrls: ['./embla-carousel-luciana.component.scss'],
})
export class EmblaCarouselLucianaComponent {
  @ViewChild('track', { static: true }) protected track!: ElementRef<any>;

  name = 'Angular';

  images = [
    new ImageItem({
      src: 'assets/carousel-luciana/carousel1.webp',
      thumb: 'assets/carousel-luciana/carousel1.webp',
    }),
    new ImageItem({
      src: 'assets/carousel-luciana/carousel2.webp',
      thumb: 'assets/carousel-luciana/carousel2.webp',
    }),
    new ImageItem({
      src: 'assets/carousel-luciana/carousel3.webp',
      thumb: 'assets/carousel-luciana/carousel3.webp',
    }),
    new ImageItem({
      src: 'assets/carousel-luciana/carousel4.jpg',
      thumb: 'assets/carousel-luciana/carousel4.jpg',
    }),
    new ImageItem({
      src: 'assets/carousel-luciana/carousel5.jpg',
      thumb: 'assets/carousel-luciana/carousel5.jpg',
    }),
    new ImageItem({
      src: 'assets/carousel-luciana/carousel6.jpg',
      thumb: 'assets/carousel-luciana/carousel6.jpg',
    }),
    new ImageItem({
      src: 'assets/carousel-luciana/carousel7.jpg',
      thumb: 'assets/carousel-luciana/carousel7.jpg',
    }),
    new ImageItem({
      src: 'assets/carousel-luciana/carousel8.jpg',
      thumb: 'assets/carousel-luciana/carousel8.jpg',
    }),
    new ImageItem({
      src: 'assets/carousel-luciana/carousel9.png',
      thumb: 'assets/carousel-luciana/carousel9.png',
    }),
    new ImageItem({
      src: 'assets/carousel-luciana/carousel10.jpg',
      thumb: 'assets/carousel-luciana/carousel10.jpg',
    }),
  ];
  activeSnap: number = 0;
  embla!: EmblaCarouselType;
  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    const options: Partial<any> = {
      dragFree: false,
      align: 'center', // Ensures the selected slide is centered
    };
    this.embla = EmblaCarousel(this.track.nativeElement, options);

    this.embla.on('select', () => {
      const currentSnapIndex = this.embla.selectedScrollSnap();
      this.ngZone.run(() => {
        this.activeSnap = currentSnapIndex;
      });
    });
    this.activeSnap = this.embla.selectedScrollSnap();
  }

  nextSlide() {
    this.embla.scrollNext();
  }

  prevSlide() {
    this.embla.scrollPrev();
  }

  scrollTo(index: number) {
    this.embla.scrollTo(index, false);
  }
}
