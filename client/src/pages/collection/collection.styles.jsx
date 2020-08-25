import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  & > div:first-child {
    height: 35rem;

    @media screen and (max-width: 425px) {
      height: 30rem;
    }

    & > div {
      top: 15rem;
      left: 0;
      width: 100%;
      text-align: center;
    }
  }
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5rem;
  width: 100%;
  padding: 6rem 1.5rem 0 1.5rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    row-gap: 4rem;
  }

  & > div {
    margin-bottom: 3rem;

    @media screen and (max-width: 425px) {
      text-align: center;
    }
  }

  & > div:not(:last-child) {
    @media screen and (max-width: 425px) {
      border-bottom: 1px solid var(--color-primary);
      padding-bottom: 3rem;
    }
  }
`;
