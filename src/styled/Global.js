import { createGlobalStyle } from 'styled-components';

const isDark = false;

export default createGlobalStyle`
  :root {
    --main-bg-color: ${isDark ? '#333' : '#f9f9f9'};
    --main-text-color: ${!isDark ? '#333' : '#f9f9f9'};
    --accent-color: #e16365;
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
`;
