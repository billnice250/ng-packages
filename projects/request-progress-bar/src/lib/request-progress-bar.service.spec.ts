import { TestBed } from '@angular/core/testing';

import { RequestProgressBarService } from './request-progress-bar.service';

describe('RequestProgressBarService', () => {
  let service: RequestProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
