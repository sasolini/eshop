import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 0;
  width: 100%;
  padding: 0 1.5rem;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h2`
  font-size: 2.8rem;
  color: var(--color-primary);
  margin-bottom: 25px;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    font-size: 3.5rem;
  }

  &:hover {
    color: grey;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    row-gap: 4rem;
  }

  @media screen and (max-width: 425px) {
    & > div {
      text-align: center;
    }

    & > div:not(:last-child) {
      border-bottom: 1px solid var(--color-primary);
      padding-bottom: 3rem;
    }
  }

  button {
    font-family: inherit;
  }
`;
