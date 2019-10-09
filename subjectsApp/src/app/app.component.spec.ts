import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PersonApiService } from './person-api.service';


const personsApiServiceMock = {
  getPersons: jest.fn()
};

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: PersonApiService,
          useValue: personsApiServiceMock
        },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'subjectsApp'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('subjectsApp');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('subjectsApp app is running!');
  // });

  it('should call "personApi getPersons method"', () => {
    fixture.detectChanges();

    expect(personsApiServiceMock.getPersons).toHaveBeenCalled();
  });
});
