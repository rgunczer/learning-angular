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
    const spy = spyOn(component, 'openModal').and.callFake(() => {});
    fixture.debugElement.query(By.css('#btnOpenModal')).triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });

  it('should call modalService.messageBox when clicked on Open Modal button ', () => {
    const spy = spyOn(modalService, 'messageBox').and.callFake(() => { return new Subject() });
    fixture.debugElement.query(By.css('#btnOpenModal')).triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });

  it('should call doStuff once modalService.messageBox returns with "yes" ', () => {
    const subj = new Subject();
    const spyOnMessageBox = spyOn(modalService, 'messageBox').and.callFake(() => { return subj; });
    const spy = spyOn(component, 'doStuff').and.callFake(() => {});
    fixture.debugElement.query(By.css('#btnOpenModal')).triggerEventHandler('click', null);

    subj.next('yes');
    fixture.detectChanges();

    expect(spyOnMessageBox).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });

});
