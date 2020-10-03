import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  margin: 0;
  transition: color 200ms;
  border: 1px solid;
  border-radius: 3px;
  border-color: var(--main-text-color);
  background-color: var(--main-bg-color);

  &:hover {
    color: var(--accent-color);
    background-color: var(--main-bg-color-hover);
  }

  &:focus {
    outline: none;
  }
`;

export default StyledButton;
