import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler, UrlHelperService } from 'angular-oauth2-oidc';
import jwt_decode from 'jwt-decode';

import { authConfig } from './auth-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authAppOfToday';

  constructor(
    private oauthService: OAuthService,
    private urlHelper: UrlHelperService
  ) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .then(
        (value: boolean) => {
          console.log('success ' + value);
          const token = this.oauthService.getIdToken();
          console.log('ID_TOKEN: ' + token);
          const decoded = jwt_decode(token);
          console.log(decoded);
        },
        (reason: any) => {
          console.log('failed to login, ' + reason);
        }
      );
  }

  login() {
    this.oauthService.initLoginFlow();
  }
}
