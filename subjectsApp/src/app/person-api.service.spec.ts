import { TestBed } from '@angular/core/testing';

import { PersonApiService } from './person-api.service';

describe('PersonApiService', () => {
  let service: PersonApiService;

  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    service = TestBed.get(PersonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have a function "getPersons"', () => {
  //   expect(service.getPersons).toBeInstanceOf(Function);
  // });
});
