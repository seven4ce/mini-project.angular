import { TestBed } from '@angular/core/testing';

import { BarangServiceService } from './barang-service.service';

describe('BarangServiceService', () => {
  let service: BarangServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarangServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
