import styled from 'styled-components';

export const Accent = styled.span`
  color: var(--accent-color);
`;

export const StyledH1 = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 2rem 0;
`;

export const StyledH2 = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
`;

export const StyledA = styled.a`
  color: var(--accent-color);
  text-decoration: none;
  transition: color 200ms;

  &:hover {
    color: blue;
  }
`;

export const Strong = styled.strong`
  font-weight: bold;
`;
