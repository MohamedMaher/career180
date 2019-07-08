import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidelementComponent } from './videlement.component';

describe('VidelementComponent', () => {
  let component: VidelementComponent;
  let fixture: ComponentFixture<VidelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
