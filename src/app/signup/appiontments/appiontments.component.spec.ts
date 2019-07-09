import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppiontmentsComponent } from './appiontments.component';

describe('AppiontmentsComponent', () => {
  let component: AppiontmentsComponent;
  let fixture: ComponentFixture<AppiontmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppiontmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppiontmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
