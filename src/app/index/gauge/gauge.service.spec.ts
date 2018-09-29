import { TestBed, inject } from '@angular/core/testing';

import { GaugeService } from './gauge.service';

describe('GaugeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaugeService]
    });
  });

  it('should be created', inject([GaugeService], (service: GaugeService) => {
    expect(service).toBeTruthy();
  }));
});
