import React from 'react';
import {
  StyledNavbar, StyledNavBrand, StyledNavItems, StyledLink,
} from '../../styled/Navbar';
import { Accent } from '../../styled/Random';

const Navbar = () => {
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
      </StyledNavItems>
    </StyledNavbar>
  );
};

export default Navbar;
