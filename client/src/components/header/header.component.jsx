import React, { createRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import HamburgerBtn from '../hamburger-btn/hamburger-btn.component';
import MainNav from '../main-nav/main-nav.component';
import SideDrawer from '../side-drawer/side-drawer.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { HeaderContainer, LogoContainer } from './header.styles';

const Header = ({ hidden }) => {
  const [isSticky, setIsSticky] = useState(false);

  const ref = createRef();

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([entries]) => {
        setIsSticky(entries.intersectionRatio < 1);
      },
      { threshold: [1] }
    );
    observer.observe(cachedRef);

    return function () {
      observer.unobserve(cachedRef);
    };
  }, [ref]);

  const eventHandler = () => {
    const sideNav = document.getElementById('side-drawer-menu');
    sideNav.classList.toggle('open');
  };

  return (
    <HeaderContainer className={isSticky ? 'sticky' : ''} ref={ref}>
      <HamburgerBtn clicked={eventHandler} />
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <MainNav />
      {hidden ? null : <CartDropdown />}
      <SideDrawer clicked={eventHandler} />
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
