import React from 'react';

// import NavOptions from '../nav-options/nav-options.component';

// import imgFlowers from '../../assets/flowers.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './side-drawer.styles.scss';

const SideDrawer = props => {
  const { clicked } = props;

  return (
    <div id='side-drawer-menu' className='side-drawer'>
      <button onClick={clicked} className='close-btn'>
        &#10005;
      </button>
      {/* <NavOptions /> */}
      {/* <div className='image-container'>
        <img src={imgFlowers} alt='' />
      </div> */}
      <Logo />
    </div>
  );
};

export default SideDrawer;
