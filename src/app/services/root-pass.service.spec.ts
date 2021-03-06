import { TestBed } from '@angular/core/testing';

import { RootPassService } from './root-pass.service';

describe('RootPassService', () => {
  let service: RootPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
