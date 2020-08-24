import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.compnent';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  HeroContainer,
} from './checkout.styles';

import heroImg from '../../assets/shop3.webp';

const CheckoutPage = ({ cartItems, total }) => (
  <>
    <HeroContainer bgImage={heroImg} title='Checkout' subTitle='' />
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: £{total}</TotalContainer>
      <StripeCheckoutButton price={total} />
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        <strong>5555 5555 5555 4444</strong>
        <br />
        <strong>Date: </strong>Any future date; <strong>CVC: </strong>Any 3
        digits;
      </WarningContainer>
    </CheckoutPageContainer>
  </>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
