import React from 'react';
import StyledButton from '../../styled/Button';

const ThemeButton = ({ toggleTheme }) => (
  <StyledButton type="button" onClick={toggleTheme}>
    ToggleTheme
  </StyledButton>
);

export default ThemeButton;
