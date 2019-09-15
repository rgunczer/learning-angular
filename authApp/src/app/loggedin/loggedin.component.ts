import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent implements OnInit {



  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
    console.log('ACCESS TOKEN: ' + this.oauthService.getAccessToken());
    console.log('TOKEN EXPIRATION: ' + this.oauthService.getAccessTokenExpiration());
  }

}
