import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondappComponent } from './secondapp.component';

describe('SecondappComponent', () => {
  let component: SecondappComponent;
  let fixture: ComponentFixture<SecondappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
