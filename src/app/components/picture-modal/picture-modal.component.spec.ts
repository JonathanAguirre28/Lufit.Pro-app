import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureModalComponent } from './picture-modal.component';

describe('PictureModalComponent', () => {
  let component: PictureModalComponent;
  let fixture: ComponentFixture<PictureModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureModalComponent]
    });
    fixture = TestBed.createComponent(PictureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
