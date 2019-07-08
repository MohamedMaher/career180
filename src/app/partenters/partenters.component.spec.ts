import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartentersComponent } from './partenters.component';

describe('PartentersComponent', () => {
  let component: PartentersComponent;
  let fixture: ComponentFixture<PartentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
