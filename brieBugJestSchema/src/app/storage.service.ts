import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  local = {
    get(key: string): any {
      return localStorage.getItem(key);
    }
  };

}
