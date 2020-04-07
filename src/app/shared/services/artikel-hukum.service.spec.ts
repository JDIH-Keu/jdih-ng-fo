import { TestBed, inject } from '@angular/core/testing';

import { ArtikelHukumService } from './artikel-hukum.service';

describe('ArtikelHukumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtikelHukumService]
    });
  });

  it('should be created', inject([ArtikelHukumService], (service: ArtikelHukumService) => {
    expect(service).toBeTruthy();
  }));
});
