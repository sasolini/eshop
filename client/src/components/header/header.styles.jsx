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
  /* width: 70px; */
  padding: 1rem 2.5rem;

  @media screen and (max-width: 500px) {
    padding: 1rem 0.5rem;
  }
`;

export const OptionsContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 3.8rem 2rem 0 0;
  font-size: 1.8rem;
  color: white;

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    width: 20%;
  }
`;

export const OptionLink = styled(Link)`
  text-transform: uppercase;
  padding: 10px 15px;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
