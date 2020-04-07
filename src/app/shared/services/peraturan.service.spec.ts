import { TestBed, inject } from '@angular/core/testing';

import { PeraturanService } from './peraturan.service';

describe('PeraturanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeraturanService]
    });
  });

  it('should be created', inject([PeraturanService], (service: PeraturanService) => {
    expect(service).toBeTruthy();
  }));
});
