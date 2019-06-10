import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CexpertsComponent } from './cexperts.component';

describe('CexpertsComponent', () => {
  let component: CexpertsComponent;
  let fixture: ComponentFixture<CexpertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CexpertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CexpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
