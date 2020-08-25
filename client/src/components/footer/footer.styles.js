import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  height: 25rem;
  background-color: #28150e;
  color: #fcf9f8;
  margin-top: 2rem;
  padding: 3rem 0;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 5rem;
    justify-items: center;
    height: unset;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    row-gap: 5rem;
    justify-items: center;
    height: unset;
    text-align: center;
  }

  hr {
    width: 60%;
    margin: 1rem 0;

    @media screen and (max-width: 425px) {
      width: 4rem;
      margin: 1rem auto;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  text-transform: uppercase;
`;

export const NavList = styled.ul`
  li {
    list-style: none;
  }

  a {
    font-size: 1.4rem;
    padding: 0.25rem 0;
    text-transform: capitalize;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  max-width: 100%;
  padding: 1rem 2.5rem;

  @media screen and (max-width: 600px) {
    justify-self: start;
    padding: 4.4rem 0 0 3rem;
  }

  @media screen and (max-width: 425px) {
    justify-self: center;
    padding: 0;
    transform: translate(-65px, 0);
    grid-row: 4;
  }
`;
