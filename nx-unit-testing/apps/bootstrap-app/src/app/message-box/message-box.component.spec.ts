import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalRef } from 'ngx-bootstrap';

import { MessageBoxComponent } from './message-box.component';

describe('MessageBoxComponent', () => {
  let component: MessageBoxComponent;
  let fixture: ComponentFixture<MessageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageBoxComponent],
      providers: [BsModalRef]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
