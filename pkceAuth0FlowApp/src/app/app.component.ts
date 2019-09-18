import { Component, OnInit } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  authCode = '<enter code here>';

  constructor(
    private cryptoService: CryptoService
  ) {

  }

  ngOnInit() {
  }

  login() {
    const authUrl = this.cryptoService.getAuthUrl();
    window.location.href = authUrl;
  }

  getAccessToken() {
    this.cryptoService.exchangeAuthCodeForAccessToken(this.authCode)
      .subscribe(data => {
        console.log('here', data);
      });
  }

}
