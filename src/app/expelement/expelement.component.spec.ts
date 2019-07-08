import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpelementComponent } from './expelement.component';

describe('ExpelementComponent', () => {
  let component: ExpelementComponent;
  let fixture: ComponentFixture<ExpelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
