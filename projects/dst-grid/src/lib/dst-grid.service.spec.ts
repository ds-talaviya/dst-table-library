import { TestBed } from '@angular/core/testing';

import { DstGridService } from './dst-grid.service';

describe('DstGridService', () => {
  let service: DstGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DstGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
