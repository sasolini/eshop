import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import {
  FooterContainer,
  LogoContainer,
  NavContainer,
  NavList,
  Title,
} from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    <NavContainer>
      <Title>Information</Title>
      <hr />
      <NavList>
        <li>
          <a href='#'>Latest news</a>
        </li>
        <li>
          <a href='#'>About us</a>
        </li>
        <li>
          <a href='#'>Contact us</a>
        </li>
        <li>
          <a href='#'>Privacy policy</a>
        </li>
      </NavList>
    </NavContainer>
    <div>
      <Title>Acount</Title>
      <hr />
      <NavList>
        <li>
          <a href='#'>My account</a>
        </li>
        <li>
          <a href='#'>My addresses</a>
        </li>
        <li>
          <a href='#'>My orders</a>
        </li>
        <li>
          <a href='#'>Password recovery</a>
        </li>
      </NavList>
    </div>
    <div>
      <Title>Follow us</Title>
      <hr />
      <NavList>
        <li>
          <a href='#'>Facebook</a>
        </li>
        <li>
          <a href='#'>Twitter</a>
        </li>
        <li>
          <a href='#'>YouTube</a>
        </li>
        <li>
          <a href='#'>Instagram</a>
        </li>
      </NavList>
    </div>
  </FooterContainer>
);

export default Footer;
