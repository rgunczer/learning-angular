import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

import {
  BsModalService,
  ComponentLoaderFactory,
  PositioningService
} from 'ngx-bootstrap';
import { ModalService } from './service/modal.service';
import { Subject } from 'rxjs';
import { MessageBoxActionResults } from './_models';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let modalService: ModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [BsModalService, ComponentLoaderFactory, PositioningService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    modalService = TestBed.get(ModalService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should get the modal service', () => {
    expect(modalService).toBeTruthy();
  });

  it('should call "openModal" method when clicked on Open Modal button ', () => {
    component.openModal = jest.fn();
    fixture.debugElement.query(By.css('#btnOpenModal')).triggerEventHandler('click', null);

    expect(component.openModal).toHaveBeenCalled();
  });

  it('should call modalService.messageBox when clicked on Open Modal button ', () => {
    // const spy = jest.spyOn(modalService, 'messageBox').mockImplementation(() => { return new Subject() });
    modalService.messageBox = jest.fn(() => new Subject());
    fixture.debugElement.query(By.css('#btnOpenModal')).triggerEventHandler('click', null);

    expect(modalService.messageBox).toHaveBeenCalled();
  });

  it('should call doStuff once modalService.messageBox returns with "yes" ', () => {
    const subj = new Subject<MessageBoxActionResults>();
    // const spyOnMessageBox = jest.spyOn(modalService, 'messageBox').mockImplementation(() => subj);
    // const spy = jest.spyOn(component, 'doStuff').mockImplementation(jest.fn);

    modalService.messageBox = jest.fn(() => subj);
    component.doStuff = jest.fn();

    fixture.debugElement.query(By.css('#btnOpenModal')).triggerEventHandler('click', null);

    subj.next('yes');
    fixture.detectChanges();

    // expect(spyOnMessageBox).toHaveBeenCalled();
    // expect(spy).toHaveBeenCalled();

    expect(modalService.messageBox).toHaveBeenCalled();
    expect(component.doStuff).toHaveBeenCalled();
  });

});
