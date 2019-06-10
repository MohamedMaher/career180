import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvideosComponent } from './cvideos.component';

describe('CvideosComponent', () => {
  let component: CvideosComponent;
  let fixture: ComponentFixture<CvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
