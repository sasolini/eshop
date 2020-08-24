import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4rem;
  padding: 4rem 1.5rem 5rem 1.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;
