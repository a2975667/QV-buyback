import { TestBed } from '@angular/core/testing';

import { LikertService } from './likert.service';

describe('LikertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LikertService = TestBed.get(LikertService);
    expect(service).toBeTruthy();
  });
});
