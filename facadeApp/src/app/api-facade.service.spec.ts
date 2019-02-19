import { TestBed } from '@angular/core/testing';

import { ApiFacadeService } from './api-facade.service';

describe('ApiFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFacadeService = TestBed.get(ApiFacadeService);
    expect(service).toBeTruthy();
  });
});
