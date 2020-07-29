import React from 'react';
import { connect } from 'react-redux';

// import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

// import './collection-item.styles.scss';

import {
  CollectionItemContainer,
  ImageContainer,
  Button,
  FooterContainer,
  Name,
  Price,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <FooterContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </FooterContainer>
      <Button onClick={() => addItem(item)} inverted>
        Add to Cart
      </Button>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
