import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
// import { HttpClient } from '@angular/common/http';
// import { LoggerService } from './logger.service';
import { ApiFacadeService } from './api-facade.service';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService extends BaseApiService {

  // constructor(protected http: HttpClient, protected logger: LoggerService) {
  constructor(protected apiFacade: ApiFacadeService) {
    super(apiFacade);
   }

  get() {
    this.getFilms();
  }
}
