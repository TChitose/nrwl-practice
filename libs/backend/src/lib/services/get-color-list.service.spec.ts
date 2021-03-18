import { TestBed } from '@angular/core/testing';

import { GetColorListService } from './get-color-list.service';

describe('GetColorListService', () => {
  let service: GetColorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetColorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
