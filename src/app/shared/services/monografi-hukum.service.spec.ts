import { TestBed, inject } from '@angular/core/testing';

import { MonografiHukumService } from './monografi-hukum.service';

describe('MonografiHukumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonografiHukumService]
    });
  });

  it('should be created', inject([MonografiHukumService], (service: MonografiHukumService) => {
    expect(service).toBeTruthy();
  }));
});
