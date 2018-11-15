import { TestBed, inject } from '@angular/core/testing';

import { TelecomServiceService } from './telecom-service.service';

describe('TelecomServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TelecomServiceService]
    });
  });

  it('should be created', inject([TelecomServiceService], (service: TelecomServiceService) => {
    expect(service).toBeTruthy();
  }));
});
