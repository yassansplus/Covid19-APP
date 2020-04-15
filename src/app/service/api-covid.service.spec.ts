import { TestBed } from '@angular/core/testing';

import { ApiCovidService } from './api-covid.service';

describe('ApiCovidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCovidService = TestBed.get(ApiCovidService);
    expect(service).toBeTruthy();
  });
});
