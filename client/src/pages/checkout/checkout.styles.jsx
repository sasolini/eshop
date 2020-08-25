import styled from 'styled-components';

import Hero from '../../components/hero/hero.component';

export const CheckoutPageContainer = styled.div`
  width: 75%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto 0;
  color: var(--color-primary);

  @media screen and (max-width: 425px) {
    margin: 0rem auto 0;
  }

  button {
    margin-left: auto;
    margin-top: 50px;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 18fr 44fr 15fr 15fr 8fr;
  justify-items: center;
  border-bottom: 1px solid var(--color-primary);

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
  font-size: 2.4rem;
  color: red;

  @media screen and (max-width: 425px) {
    font-size: 1.6rem;
  }
`;

export const HeroContainer = styled(Hero)`
  max-height: 35rem;

  & > div:first-child {
    left: 0;
    top: 15rem;
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    max-height: 30rem;
  }
`;
