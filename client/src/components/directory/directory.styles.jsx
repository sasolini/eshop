import styled from 'styled-components';

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 30rem);
  gap: 2.55rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 25rem);
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 20rem);
  }

  & div:first-child {
    grid-row: 1 / span 2;

    @media screen and (max-width: 800px) {
      grid-row: 1 / span 1;
      grid-column: 1 / span 2;
    }

    @media screen and (max-width: 425px) {
      grid-row: unset;
      grid-column: unset;
    }
  }

  & div:not(:first-child) {
    grid-column: 2 / span 2;

    @media screen and (max-width: 800px) {
      grid-column: unset;
      grid-row: 2 / span 1;
    }

    @media screen and (max-width: 425px) {
      grid-column: unset;
      grid-row: unset;
    }
  }
`;
