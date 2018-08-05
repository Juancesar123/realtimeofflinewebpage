import { TestBed, inject } from '@angular/core/testing';

import { FeathersService } from './feathers.service';

describe('FeathersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeathersService]
    });
  });

  it('should be created', inject([FeathersService], (service: FeathersService) => {
    expect(service).toBeTruthy();
  }));
});
