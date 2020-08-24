import React from 'react';

import { HamburgerBtnContainer } from './hamburger-btn.styles';

const HamburgerBtn = props => {
  const { clicked } = props;

  return (
    <HamburgerBtnContainer onClick={clicked} className='only-mobile'>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </HamburgerBtnContainer>
  );
};

export default HamburgerBtn;
