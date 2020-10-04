import React from 'react';
import LoginButton from '../LoginButton/LoginButton';
import ThemeButton from '../ThemeButton/ThemeButton';
import {
  StyledNavbar, StyledNavBrand, StyledNavItems, StyledLi, StyledLink,
} from '../../styled/Navbar';
import { Accent } from '../../styled/Random';

const Navbar = ({ toggleTheme }) => {
  const links = [
    { link: '/', name: 'Home' },
    { link: '/highscores', name: 'HighScores' },
    { link: '/about', name: 'About' },
  ];

  let htmlLinks = [];
  if (Array.isArray(links) && links.length) {
    htmlLinks = links.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <StyledLi key={`li-${index}`}>
        <StyledLink to={item.link} className="nav-link">{item.name}</StyledLink>
      </StyledLi>
    ));
  }

  return (
    <StyledNavbar>
      <StyledNavBrand>
        <StyledLink to="/">
          Game.Typo.
          <Accent>Logo</Accent>
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
