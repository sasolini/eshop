import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  ImageContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer>
      <CartItemImage src={imageUrl} alt='item' />
    </ImageContainer>
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x £{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
