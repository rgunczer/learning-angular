import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TalksComponent } from './talks.component';
import { Talk } from '../talk';

describe('TalksComponent', () => {
  let component: TalksComponent;
  let fixture: ComponentFixture<TalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of talks', () => {
    component.talks = [
      { id: 1, title: 'apple' },
      { id: 2, title: 'orange' }
    ];
    fixture.detectChanges();

    const s = fixture.debugElement.nativeElement;
    const ts = s.querySelectorAll('app-talk');

    expect(ts.length).toEqual(2);
    expect(ts[0].talk.title).toEqual('apple');
  });
});
