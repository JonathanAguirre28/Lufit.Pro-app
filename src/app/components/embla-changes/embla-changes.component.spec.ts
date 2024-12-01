import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmblaChangesComponent } from './embla-changes.component';

describe('EmblaChangesComponent', () => {
  let component: EmblaChangesComponent;
  let fixture: ComponentFixture<EmblaChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmblaChangesComponent]
    });
    fixture = TestBed.createComponent(EmblaChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
