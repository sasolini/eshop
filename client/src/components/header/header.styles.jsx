import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: sticky;
  top: -1px;
  height: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  &.sticky:before {
    top: 0px;
  }
  &:before {
    content: '';
    position: absolute;
    top: -7rem;
    width: 100%;
    height: 7rem;
    background-color: var(--color-header-dark);
    opacity: 0.85;
    z-index: -1;
    transition: 300ms ease all;
  }

  & .only-mobile {
    display: none;

    @media screen and (max-width: 500px) {
      display: initial;
    }
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 1rem 2.5rem;

  @media screen and (max-width: 500px) {
    padding: 1rem 0.5rem;
    /* width: 60%; */
    margin: 0 auto;
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    /* width: 60%;
    text-align: center; */
    svg {
      width: 16rem;
    }
  }
`;
