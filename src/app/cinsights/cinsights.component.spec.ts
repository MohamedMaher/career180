import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinsightsComponent } from './cinsights.component';

describe('CinsightsComponent', () => {
  let component: CinsightsComponent;
  let fixture: ComponentFixture<CinsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
