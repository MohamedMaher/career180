import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CexploreComponent } from './cexplore.component';

describe('CexploreComponent', () => {
  let component: CexploreComponent;
  let fixture: ComponentFixture<CexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
