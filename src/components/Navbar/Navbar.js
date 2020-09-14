import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import {
  StyledNavbar, StyledNavBrand, StyledNavItems, StyledLink,
} from '../../styled/Navbar';
import { Accent } from '../../styled/Random';

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated, user);
  const links = [
    { link: '/', name: 'Home' },
    { link: '/highscores', name: 'HighScores' },
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
        { !isAuthenticated ? <LoginButton /> : <LogoutButton /> }
      </StyledNavItems>
    </StyledNavbar>
  );
};

export default Navbar;
