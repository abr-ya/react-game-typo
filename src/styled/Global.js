import { createGlobalStyle } from 'styled-components';

// first version:
// --main-text-color: ${(props) => props.theme.mainTextColor};
// --main-bg-color: ${(props) => props.theme.mainBgColor};
export default createGlobalStyle`
  :root { 
    --main-text-h: ${(props) => props.theme.mainTextH};
    --main-text-s: ${(props) => props.theme.mainTextS};
    --main-text-l: ${(props) => props.theme.mainTextL};
    --main-bg-l: ${(props) => props.theme.mainBgL};
    --main-bg-l-hover: ${(props) => props.theme.mainBgLHover};
    --main-text-color: hsl(var(--main-text-h), var(--main-text-s), var(--main-text-l));
    --main-bg-color: hsl(var(--main-text-h), var(--main-text-s), var(--main-bg-l));
    --main-bg-color-hover: hsl(var(--main-text-h), var(--main-text-s), var(--main-bg-l-hover));
    --accent-color: ${(props) => props.theme.accentColor};
  }
  *{
    box-sizing: border-box;
    color: var(--main-text-color);
    margin: 0;
    font-family: sans-serif;
    font-weight: 300;
  }

  h1, h2 {
    margin-bottom: 2rem;  
  }

  p {
    margin-bottom: 10px;  
  }
`;
