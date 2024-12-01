import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import { ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-embla-changes',
  templateUrl: './embla-changes.component.html',
  styleUrls: ['./embla-changes.component.scss'],
})
export class EmblaChangesComponent {
  @ViewChild('track', { static: true }) protected track!: ElementRef<any>;

  name = 'Angular';

  images = [
    new ImageItem({
      src: 'assets/carousel-changes/carousel1.webp',
      thumb: 'assets/carousel-changes/carousel1.webp',
    }),
    new ImageItem({
      src: 'assets/carousel-changes/carousel2.webp',
      thumb: 'assets/carousel-changes/carousel2.webp',
    }),
    new ImageItem({
      src: 'assets/carousel-changes/carousel3.webp',
      thumb: 'assets/carousel-changes/carousel3.webp',
    }),
    new ImageItem({
      src: 'assets/carousel-changes/carousel4.webp',
      thumb: 'assets/carousel-changes/carousel4.webp',
    }),
    new ImageItem({
      src: 'assets/carousel-changes/carousel5.webp',
      thumb: 'assets/carousel-changes/carousel5.webp',
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
