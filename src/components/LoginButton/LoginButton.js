import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import StyledButton from '../../styled/Button';

const LoginButton = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const buttonHandler = isAuthenticated
    ? () => logout({ returnTo: window.location.origin })
    : () => loginWithRedirect();
  const buttonTitle = isAuthenticated ? 'Log Out' : 'Log In';

  return (
    <StyledButton type="button" onClick={buttonHandler}>
      {buttonTitle}
    </StyledButton>
  );
};

export default LoginButton;
