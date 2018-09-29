import { TestBed, inject } from '@angular/core/testing';

import { GoodGaugeService } from './good-gauge.service';

describe('GoodGaugeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodGaugeService]
    });
  });

  it('should be created', inject([GoodGaugeService], (service: GoodGaugeService) => {
    expect(service).toBeTruthy();
  }));
});
