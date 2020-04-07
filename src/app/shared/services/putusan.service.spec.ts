import { TestBed, inject } from '@angular/core/testing';

import { PutusanService } from './putusan.service';

describe('PutusanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PutusanService]
    });
  });

  it('should be created', inject([PutusanService], (service: PutusanService) => {
    expect(service).toBeTruthy();
  }));
});
