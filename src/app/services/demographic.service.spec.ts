import { TestBed } from '@angular/core/testing';

import { DemographicService } from './demographic.service';

describe('DemographicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemographicService = TestBed.get(DemographicService);
    expect(service).toBeTruthy();
  });
});
