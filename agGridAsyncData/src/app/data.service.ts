import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {
  }

  getCars(): Observable<any[]> {
    const url = `${this.baseUrl}/cars`;
    return this.http.get<any[]>(url);
  }

  getPrice(id: string): Observable<any> {
    const rndInt = this.randomIntFromInterval(1, 6) * 1000;
    const url = `${this.baseUrl}/prices/${id}`;
    return this.http.get<any[]>(url)
      .pipe(
        delay(rndInt)
      );
  }

  private randomIntFromInterval(min: number, max: number): number { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
