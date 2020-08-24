import React, { createRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import HamburgerBtn from '../hamburger-btn/hamburger-btn.component';
import SideDrawer from '../side-drawer/side-drawer.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  HamburgerBtnContainer,
} from './header.styles';

const signInSignOutLink = (currentUser, action) => {
  return currentUser ? (
    <OptionLink as='div' onClick={action}>
      sign out
    </OptionLink>
  ) : (
    <OptionLink to='/signin'>sign in</OptionLink>
  );
};

const Header = ({ currentUser, hidden, signOutStart }) => {
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

  const eventHandler = event => {
    console.log('HIT');
    const sideNav = document.getElementById('side-drawer-menu');
    sideNav.classList.toggle('open');
  };

  return (
    <HeaderContainer className={isSticky ? 'sticky' : ''} ref={ref}>
      <HamburgerBtn clicked={eventHandler} />
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>shop</OptionLink>
        {/* <OptionLink to='/contact'>contact</OptionLink> */}
        {signInSignOutLink(currentUser, signOutStart)}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
      <SideDrawer clicked={eventHandler} />
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
