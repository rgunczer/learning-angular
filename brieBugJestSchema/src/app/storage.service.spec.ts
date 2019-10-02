import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    service = TestBed.get(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ', () => {
    const spy = jest.spyOn(localStorage, 'getItem').mockReturnValue(null);
    const retVal = service.local.get('apple');
    expect(retVal).toBeNull();
    spy.mockRestore();
  });

});
