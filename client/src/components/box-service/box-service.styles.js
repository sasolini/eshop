import styled from 'styled-components';

export const BoxServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  text-align: center;
  font-size: 1.6rem;
  color: var(--color-primary);

  @media screen and (max-width: 600px) {
    grid-template-rows: 5rem;
    grid-template-columns: 1fr 4fr;
    column-gap: 2.5rem;
    text-align: left;
  }
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  fill: var(--color-primary);

  @media screen and (max-width: 600px) {
    grid-row: 2 / span 1;
  }
`;

export const Title = styled.h4`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 600px) {
    grid-column: 1 / span 2;
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
`;
