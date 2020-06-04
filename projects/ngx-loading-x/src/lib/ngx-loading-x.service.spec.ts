import { TestBed } from '@angular/core/testing';

import { NgxLoadingXService } from './ngx-loading-x.service';

describe('NgxLoadingXService', () => {
  let service: NgxLoadingXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLoadingXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
