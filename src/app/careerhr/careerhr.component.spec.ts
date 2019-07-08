import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerhrComponent } from './careerhr.component';

describe('CareerhrComponent', () => {
  let component: CareerhrComponent;
  let fixture: ComponentFixture<CareerhrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerhrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
