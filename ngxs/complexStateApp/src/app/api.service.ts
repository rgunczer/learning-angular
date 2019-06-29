import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPeople(id: number): Observable<any> {
    return this.http.get(`https://swapi.co/api/people/${id}`);
  }

  getPeoples(): Observable<any> {
    return this.http.get(`https://swapi.co/api/people`);
  }

}
