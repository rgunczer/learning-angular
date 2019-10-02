import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  // beforeEach(() => TestBed.configureTestingModule({}));
  // beforeEach(() => {
  //   service = TestBed.get(LoggerService);
  // });

  beforeEach(() => {
    service = new LoggerService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call "console.log"', () => {
    const spy = jest.spyOn(service, 'log');
    service.log('joel');
    expect(spy).toHaveBeenCalled();
  });

  it('should call "console.warn"', () => {
    const spy = jest.spyOn(service, 'warn');
    service.warn('joel');
    expect(spy).toHaveBeenCalled();
  });

  it('should call "console.error"', () => {
    const spy = jest.spyOn(service, 'error');
    service.error('joel');
    expect(spy).toHaveBeenCalled();
  });


});
