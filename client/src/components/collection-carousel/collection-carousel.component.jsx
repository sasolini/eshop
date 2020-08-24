import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import { selectSpecificCollection } from '../../redux/shop/shop.selectors';

import {
  CarouselContainer,
  TitleContainer,
  ItemsContainer,
} from './collection-carousel.styles';

const CollectionCarousel = ({ collection, history, path }) => {
  const { title, items, routeName } = collection;
  return (
    <CarouselContainer>
      <TitleContainer onClick={() => history.push(`${path}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <ItemsContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </ItemsContainer>
    </CarouselContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectSpecificCollection(ownProps.collectionName)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionCarousel));
