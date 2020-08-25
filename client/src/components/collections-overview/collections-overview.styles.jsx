import styled from 'styled-components';

import Hero from '../../components/hero/hero.component';

export const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroContainer = styled(Hero)`
  height: 35rem;

  & > div:first-child {
    top: 15rem;
    left: 0;
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    height: 30rem;
  }
`;
