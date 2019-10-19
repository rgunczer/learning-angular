import { TestBed } from '@angular/core/testing';

import { BsModalService } from 'ngx-bootstrap';

import { ModalService } from './modal.service';

class BsModalServiceStub {
  constructor() {
  }
}

describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: BsModalService, useClass: BsModalServiceStub }]
  }));

  it('should be created', () => {
    debugger;
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
