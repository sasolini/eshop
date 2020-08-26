import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import heroImg from '../../assets/shop3.webp';

import {
  CollectionsOverviewContainer,
  HeroContainer,
} from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
  <>
    <HeroContainer
      bgImage={heroImg}
      title='Shop'
      subTitle='All the coffee you need in one place.'
    />
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  </>
);

const mapStateToProsp = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProsp)(CollectionsOverview);
