import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.component';

import { HeroContainer, ImageContainer } from './hero.styles';

const Hero = ({
  title,
  subTitle,
  button,
  bgImage,
  history,
  match,
  linkUrl,
  className,
}) => (
  <HeroContainer className={className}>
    <div>
      <h3>{title}</h3>
      <p>{subTitle}</p>
      {button ? (
        <CustomButton onClick={() => history.push(`${match.url}${linkUrl}`)}>
          {button}
        </CustomButton>
      ) : null}
    </div>
    <ImageContainer>
      <img src={bgImage} alt='' />
    </ImageContainer>
  </HeroContainer>
);

export default withRouter(Hero);
