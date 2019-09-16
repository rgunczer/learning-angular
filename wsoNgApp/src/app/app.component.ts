import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';
import createAuth0Client from '@auth0/auth0-spa-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsoNgApp';

  constructor(private oauthService: OAuthService) {
    // this.configure();
    // this.configureWithoutDiscovery();


    createAuth0Client({
      domain: 'localhost:9443/oauth2/',
      client_id: '5nrGtfjfzLOaintbKxr9dshf1m4a',
      redirect_uri: 'http://localhost:4200/',
    }).then(auth0 => {
      console.log('auth...', auth0);
      auth0.loginWithRedirect().catch(() => {
        console.log('error while redirecting the user');
      });
    });
  }

  // private configure() {
  //   this.oauthService.configure(authConfig);
  //   this.oauthService.strictDiscoveryDocumentValidation = false;
  //   this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin();
  // }

//   private configureWithoutDiscovery() {
//     this.oauthService.configure(noDiscoveryAuthConfig);
//     this.oauthService.tokenValidationHandler = new NullValidationHandler();
//     this.oauthService.tryLogin();
// }

  login() {
    console.log('login');
//    this.oauthService.initLoginFlow();
  }
}
