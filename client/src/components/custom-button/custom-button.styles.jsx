import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: var(--color-primary);
  color: white;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);

  &:hover {
    background-color: var(--color-primary);
    color: white;
    border: 1px solid var(--color-primary);
  }
`;
const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 1.5rem;
  font-size: 15px;
  text-transform: uppercase;
  font-family: inherit;
  border-radius: 3px;
  cursor: pointer;

  ${getButtonStyles}
`;
