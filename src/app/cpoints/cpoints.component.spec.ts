import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpointsComponent } from './cpoints.component';

describe('CpointsComponent', () => {
  let component: CpointsComponent;
  let fixture: ComponentFixture<CpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
