import { TestBed } from '@angular/core/testing';

import { GaneshDataService } from './ganesh-data.service';

describe('HomeService', () => {
  let service: GaneshDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaneshDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
