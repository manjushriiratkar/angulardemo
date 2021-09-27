import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDayComponent } from './get-day.component';

describe('GetDayComponent', () => {
  let component: GetDayComponent;
  let fixture: ComponentFixture<GetDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
