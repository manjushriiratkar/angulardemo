import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeprogramComponent } from './practiceprogram.component';

describe('PracticeprogramComponent', () => {
  let component: PracticeprogramComponent;
  let fixture: ComponentFixture<PracticeprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
