import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtelementComponent } from './evtelement.component';

describe('EvtelementComponent', () => {
  let component: EvtelementComponent;
  let fixture: ComponentFixture<EvtelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvtelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvtelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
