import React from 'react';

import {
  BoxServiceContainer,
  IconContainer,
  Title,
  Text,
} from './box-service.styles';

const BoxService = props => {
  const { Icon, title, children } = props;
  return (
    <BoxServiceContainer>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Title>{title}</Title>
      <Text>{children}</Text>
    </BoxServiceContainer>
  );
};

export default BoxService;
