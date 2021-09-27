import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssclassComponent } from './cssclass.component';

describe('CssclassComponent', () => {
  let component: CssclassComponent;
  let fixture: ComponentFixture<CssclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
