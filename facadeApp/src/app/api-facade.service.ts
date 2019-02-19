import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ApiFacadeService {

  constructor(public http: HttpClient, public logger: LoggerService) { }

}
