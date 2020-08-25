import React from 'react';

import MainNav from '../main-nav/main-nav.component';

import {
  SideDrawerContainer,
  CloseBtn,
  LogoContainer,
} from './side-drawer.styles';

const SideDrawer = props => {
  const { clicked } = props;

  return (
    <SideDrawerContainer id='side-drawer-menu'>
      <CloseBtn onClick={clicked}>&#10005;</CloseBtn>
      <MainNav />
      <LogoContainer />
    </SideDrawerContainer>
  );
};

export default SideDrawer;
