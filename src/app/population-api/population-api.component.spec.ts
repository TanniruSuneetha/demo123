import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationApiComponent } from './population-api.component';

describe('PopulationApiComponent', () => {
  let component: PopulationApiComponent;
  let fixture: ComponentFixture<PopulationApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
