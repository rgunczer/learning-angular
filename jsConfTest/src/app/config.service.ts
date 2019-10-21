import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  readonly configKey = 'appConfig';

  apiUrl: string;
  appTitle: string;

  constructor() {
    console.log('ConfigService ctor');
    if (window[this.configKey]) {
      this.copyParamValues(window[this.configKey]);
      window[this.configKey] = null;
    } else {
      alert(`Error: Global ${this.configKey} object is not found or invalid.`);
    }
  }

  copyParamValues(config: any): void {
    this.apiUrl = config.api_url;
    this.appTitle = config.title;
  }

  // dump() {
  //   console.log({ apiUrl: this.apiUrl, appTitle: this.appTitle });
  // }

}
