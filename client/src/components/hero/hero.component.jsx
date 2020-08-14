import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import heroImg from '../../assets/coffee_hero.jpg';

import { HeroContainer } from './hero.styles';

const Hero = () => (
  <HeroContainer>
    <div>
      <h3>Start A Day With Coffee</h3>
      <p>Here to bring your lifestyle to the next level.</p>
      <CustomButton inverted>Shop here</CustomButton>
    </div>
    <img src={heroImg} alt='' />
  </HeroContainer>
);

export default Hero;
