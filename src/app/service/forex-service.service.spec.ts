import { TestBed } from '@angular/core/testing';

import { ForexServiceService } from './forex-service.service';

describe('ForexServiceService', () => {
  let service: ForexServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForexServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
