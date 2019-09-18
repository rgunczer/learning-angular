import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(
    private http: HttpClient
  ) {

  }

  generateCodeVerifier(): string {
    const codeVerifier = this.generateRandomString(128);
    return codeVerifier;
  }

  generateRandomString(length: number): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  generateCodeChallenge(codeVerifier: string): string {
    const codeChallenge = this.base64URL(CryptoJS.SHA256(codeVerifier));
    return codeChallenge;
  }

  base64URL(str: CryptoJS.WordArray): string {
    return str.toString(CryptoJS.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }

  getAuthUrl(): string {
    const codeVerifier = this.generateCodeVerifier();
    const codeChallange = this.generateCodeChallenge(codeVerifier);

    console.log({ codeVerifier, codeChallange });

    const authEndpoint = 'https://localhost:9443/oauth2/authorize';
    const authParams = {
      scope: 'openid',
      response_type: 'code',
      client_id: '5nrGtfjfzLOaintbKxr9dshf1m4a',
      code_challenge: codeChallange,
      code_challenge_method: 'S256',
      redirect_uri: 'http://localhost:4200/'
    };
    const authQueryParams = Object.entries(authParams).map(
      ([key, value]) => `${key}=${value}`
    ).join('&');

    localStorage.setItem('code_verifier', codeVerifier);

    const authUrl = `${authEndpoint}?${authQueryParams}`;
    console.log('authUrl: ', authUrl);
    return authUrl;
  }

  exchangeAuthCodeForAccessToken(YOUR_AUTHORIZATION_CODE: string): Observable<any> {

    const code_verifier_from_local_storage = localStorage.getItem('code_verifier');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const options = {
      headers: httpHeaders
    };

    const body = {
      grant_type:  'authorization_code',
      client_id: '5nrGtfjfzLOaintbKxr9dshf1m4a',
      code_verifier: code_verifier_from_local_storage,
      code: YOUR_AUTHORIZATION_CODE,
      redirect_uri: 'http://localhost:4200/'
    };

    // return this.http.post('https://localhost:9443/oauth2/token', body, options);
    return this.http.post('/oauth2/token', body, options);
  }
}
