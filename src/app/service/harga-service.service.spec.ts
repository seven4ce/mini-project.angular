import { TestBed } from '@angular/core/testing';

import { HargaServiceService } from './harga-service.service';

describe('HargaServiceService', () => {
  let service: HargaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HargaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
