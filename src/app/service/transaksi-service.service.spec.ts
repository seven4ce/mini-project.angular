import { TestBed } from '@angular/core/testing';

import { TransaksiServiceService } from './transaksi-service.service';

describe('TransaksiServiceService', () => {
  let service: TransaksiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaksiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
