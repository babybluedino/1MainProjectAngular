import { TestBed } from '@angular/core/testing';

import { PlanserviceService } from './planservice.service';

describe('PlanserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanserviceService = TestBed.get(PlanserviceService);
    expect(service).toBeTruthy();
  });
});
