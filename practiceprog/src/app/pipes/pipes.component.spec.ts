import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PIPESComponent } from './pipes.component';

describe('PIPESComponent', () => {
  let component: PIPESComponent;
  let fixture: ComponentFixture<PIPESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PIPESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PIPESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
