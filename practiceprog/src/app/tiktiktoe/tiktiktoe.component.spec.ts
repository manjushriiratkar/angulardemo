import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktiktoeComponent } from './tiktiktoe.component';

describe('TiktiktoeComponent', () => {
  let component: TiktiktoeComponent;
  let fixture: ComponentFixture<TiktiktoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiktiktoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiktiktoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
