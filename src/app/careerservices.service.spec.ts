import { TestBed } from '@angular/core/testing';

import { CareerservicesService } from './careerservices.service';

describe('CareerservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareerservicesService = TestBed.get(CareerservicesService);
    expect(service).toBeTruthy();
  });
});
