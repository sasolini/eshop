import React from 'react';

import Directory from '../../components/directory/directory.component';
import BoxService from '../../components/box-service/box-service.component';
import Hero from '../../components/hero/hero.component';

import { ReactComponent as TruckImg } from '../../assets/truck.svg';
import { ReactComponent as ReturnImg } from '../../assets/exchange.svg';
import { ReactComponent as ShieldImg } from '../../assets/shield.svg';

import { HomePageContainer, BoxServiceContainer } from './homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Hero />
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
    </HomePageContainer>
  );
};

export default HomePage;
