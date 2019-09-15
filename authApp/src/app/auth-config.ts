import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  issuer: 'https://dev-fcehqw80.eu.auth0.com/',
  redirectUri: window.location.origin + '/loggedin',
  clientId: 'Ho0EqTwwHxfwsMzfpnkR3nQfhXn7Ysme',
  scope: 'openid profile email voucher'

};
