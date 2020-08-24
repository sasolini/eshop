import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  & > div:first-child {
    height: 35rem;
  }
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  width: 100%;
  padding: 6rem 1.5rem 0 1.5rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  & > div {
    margin-bottom: 3rem;
  }
`;
