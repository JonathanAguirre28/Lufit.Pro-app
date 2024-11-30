import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmblaCarouselLucianaComponent } from './embla-carousel-luciana.component';

describe('EmblaCarouselLucianaComponent', () => {
  let component: EmblaCarouselLucianaComponent;
  let fixture: ComponentFixture<EmblaCarouselLucianaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmblaCarouselLucianaComponent]
    });
    fixture = TestBed.createComponent(EmblaCarouselLucianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
