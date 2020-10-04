import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px 0;
`;

export const StyledNavBrand = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  & > a {
    text-decoration: none;
  }
`;

export const StyledNavItems = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 200ms;

  &:hover {
    color: var(--accent-color);
  }
`;
