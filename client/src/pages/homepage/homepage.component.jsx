import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Directory from '../../components/directory/directory.component';
import BoxService from '../../components/box-service/box-service.component';
import Hero from '../../components/hero/hero.component';
import CollectionCarouselContainer from '../../components/collection-carousel/collection-carousel.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { ReactComponent as TruckImg } from '../../assets/truck.svg';
import { ReactComponent as ReturnImg } from '../../assets/exchange.svg';
import { ReactComponent as ShieldImg } from '../../assets/shield.svg';
import heroImg from '../../assets/coffee_hero.jpg';

import { HomePageContainer, BoxServiceContainer } from './homepage.styles';

const HomePage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <HomePageContainer>
      <Hero
        bgImage={heroImg}
        title='Start A Day With Coffee'
        subTitle='Here to bring your lifestyle to the next level.'
        button='shop here'
        linkUrl='shop'
      />
      <BoxServiceContainer>
        <BoxService title='shipping' Icon={TruckImg}>
          All orders before 6pm as shipped on the same day.
        </BoxService>
        <BoxService title='safe payment' Icon={ReturnImg}>
          If your are not 100% satisfied with our products, return them within
          30 days for a full refund.
        </BoxService>
        <BoxService title='shipping' Icon={ShieldImg}>
          Our Buyer Protection covers your purchase from click to delivery.
        </BoxService>
      </BoxServiceContainer>
      <Directory />
      <CollectionCarouselContainer collectionName='best sellers' path='shop' />
    </HomePageContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
