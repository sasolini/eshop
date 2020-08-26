import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { OptionsContainer, OptionLink } from './main-nav.styles';

const MainNav = ({ currentUser, signOutStart }) => {
  const signInSignOutLink = () => {
    return currentUser ? (
      <OptionLink as='div' onClick={signOutStart}>
        sign out
      </OptionLink>
    ) : (
      <OptionLink to='/signin'>sign in</OptionLink>
    );
  };

  return (
    <OptionsContainer>
      <OptionLink to='/'>home</OptionLink>
      <OptionLink to='/shop'>shop</OptionLink>
      {/* <OptionLink to='/contact'>contact</OptionLink> */}
      {signInSignOutLink(currentUser, signOutStart)}
      <CartIcon />
    </OptionsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
