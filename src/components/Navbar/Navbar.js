import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton/LoginButton';
import ThemeButton from '../ThemeButton/ThemeButton';
import {
  StyledNavbar, StyledNavBrand, StyledNavItems, StyledLink,
} from '../../styled/Navbar';
import { Accent } from '../../styled/Random';

const Navbar = ({ toggleTheme }) => {
  const { isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated, user);
  const links = [
    { link: '/', name: 'Home' },
    { link: '/highscores', name: 'HighScores' },
    { link: '/about', name: 'About' },
  ];

  let htmlLinks = [];
  if (Array.isArray(links) && links.length) {
    htmlLinks = links.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={`li-${index}`}>
        <StyledLink to={item.link} className="nav-link">{item.name}</StyledLink>
      </li>
    ));
  }

  return (
    <StyledNavbar>
      <StyledNavBrand>
        <StyledLink to="/">
          Nav.Logo.
          <Accent>Type.</Accent>
        </StyledLink>
      </StyledNavBrand>
      <StyledNavItems>
        {htmlLinks}
        <LoginButton />
        <ThemeButton toggleTheme={toggleTheme} />
      </StyledNavItems>
    </StyledNavbar>
  );
};

export default Navbar;
