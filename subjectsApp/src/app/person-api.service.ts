import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonApiService {

  constructor() { }

  getPersons(): Observable<any> {
    return of([
      {
        id: 1,
        name: 'apple'
      },
      {
        id: 2,
        name: 'kiwi'
      },
      {
        id: 3,
        name: 'super hero'
      }
    ]);
  }
}
