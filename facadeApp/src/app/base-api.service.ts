import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import { ApiFacadeService } from './api-facade.service';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  protected http: HttpClient;
  protected logger: LoggerService;

  // constructor(protected http: HttpClient, protected logger: LoggerService) { }
  constructor(protected apiFacade: ApiFacadeService) {
    this.http = apiFacade.http;
    this.logger = apiFacade.logger;
  }

  getFilms(): Observable<any[]> {
    this.apiFacade.logger.log('getFilms');
    const url = 'https://swapi.co/api/films';
    return this.apiFacade.http.get<any[]>(url);
  }
}
