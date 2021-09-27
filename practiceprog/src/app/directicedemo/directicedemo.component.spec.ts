import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecticedemoComponent } from './directicedemo.component';

describe('DirecticedemoComponent', () => {
  let component: DirecticedemoComponent;
  let fixture: ComponentFixture<DirecticedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecticedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecticedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
