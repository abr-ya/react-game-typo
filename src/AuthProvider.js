import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthProvider = ({ children }) => (
  <Auth0Provider
    domain="react-game-typo.eu.auth0.com"
    clientId="2Lf1ubeZHElEpgJAS6nvf4kEUSq8Aiov"
    redirectUri={window.location.origin}
    audience="https://rgt/"
  >
    { children }
  </Auth0Provider>
);

export default AuthProvider;
