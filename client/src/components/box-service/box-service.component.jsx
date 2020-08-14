import React from 'react';

import {
  BoxServiceContainer,
  IconContainer,
  Title,
} from './box-service.styles';

const BoxService = props => {
  const { Icon, title, children } = props;
  return (
    <BoxServiceContainer>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Title>{title}</Title>
      <p>{children}</p>
    </BoxServiceContainer>
  );
};

export default BoxService;
