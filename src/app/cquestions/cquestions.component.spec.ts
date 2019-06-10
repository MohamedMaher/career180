import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CquestionsComponent } from './cquestions.component';

describe('CquestionsComponent', () => {
  let component: CquestionsComponent;
  let fixture: ComponentFixture<CquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
