import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutngmodelComponent } from './withoutngmodel.component';

describe('WithoutngmodelComponent', () => {
  let component: WithoutngmodelComponent;
  let fixture: ComponentFixture<WithoutngmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutngmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutngmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
