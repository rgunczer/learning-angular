import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCountereComponent } from './my-countere.component';

describe('MyCountereComponent', () => {
  let component: MyCountereComponent;
  let fixture: ComponentFixture<MyCountereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCountereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCountereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
