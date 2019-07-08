import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueselementComponent } from './queselement.component';

describe('QueselementComponent', () => {
  let component: QueselementComponent;
  let fixture: ComponentFixture<QueselementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueselementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueselementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
