import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalRef } from 'ngx-bootstrap';

import { BaseModalComponent } from './base-modal.component';

describe('BaseModalComponent', () => {
  let component: BaseModalComponent;
  let fixture: ComponentFixture<BaseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaseModalComponent],
      providers: [BsModalRef]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
