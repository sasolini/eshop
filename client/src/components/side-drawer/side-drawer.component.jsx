import React from 'react';

import MainNav from '../main-nav/main-nav.component';

import {
  SideDrawerContainer,
  SideDrawerMenu,
  CloseBtn,
  LogoContainer,
  BackDrop,
} from './side-drawer.styles';

const SideDrawer = props => {
  const { clicked } = props;

  return (
    <SideDrawerContainer id='side-drawer-menu'>
      <BackDrop onClick={clicked} />
      <SideDrawerMenu>
        <CloseBtn onClick={clicked}>&#10005;</CloseBtn>
        <MainNav />
        <LogoContainer />
      </SideDrawerMenu>
    </SideDrawerContainer>
  );
};

export default SideDrawer;
