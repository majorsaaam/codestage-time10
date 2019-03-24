import { TestBed } from '@angular/core/testing';

import { ExemploRestService } from './exemplo-rest.service';

describe('ExemploRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExemploRestService = TestBed.get(ExemploRestService);
    expect(service).toBeTruthy();
  });
});
