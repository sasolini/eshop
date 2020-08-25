import styled from 'styled-components';

export const HamburgerBtnContainer = styled.div`
  cursor: pointer;
  padding: 2.5rem 0 0 2.5rem;

  @media screen and (max-width: 500px) {
    width: 20%;
    padding: 2.5rem 0 0 1.5rem;
  }

  &:hover > div {
    background-color: var(--color-primary);
  }

  div {
    background-color: white;
    height: 3px;
    width: 2.5rem;
    transition: 200ms ease all;
  }

  .bar2 {
    margin: 0.5rem 0;
  }
`;
