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

export const TitleContainer = styled.h1`
  font-size: 28px;
  color: var(--color-primary);
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  button {
    font-family: inherit;
  }
`;
