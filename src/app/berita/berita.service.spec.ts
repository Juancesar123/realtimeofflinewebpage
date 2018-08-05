import { TestBed, inject } from '@angular/core/testing';

import { BeritaService } from './berita.service';

describe('BeritaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeritaService]
    });
  });

  it('should be created', inject([BeritaService], (service: BeritaService) => {
    expect(service).toBeTruthy();
  }));
});
