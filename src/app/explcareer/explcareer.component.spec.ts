import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplcareerComponent } from './explcareer.component';

describe('ExplcareerComponent', () => {
  let component: ExplcareerComponent;
  let fixture: ComponentFixture<ExplcareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplcareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplcareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
