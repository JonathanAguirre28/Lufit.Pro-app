import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NabvarComponent', () => {
  let component: NabvarComponent;
  let fixture: ComponentFixture<NabvarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NabvarComponent]
    });
    fixture = TestBed.createComponent(NabvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
