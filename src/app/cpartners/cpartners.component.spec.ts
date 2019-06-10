import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpartnersComponent } from './cpartners.component';

describe('CpartnersComponent', () => {
  let component: CpartnersComponent;
  let fixture: ComponentFixture<CpartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
