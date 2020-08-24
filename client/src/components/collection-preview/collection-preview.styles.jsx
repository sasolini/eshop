import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
  padding: 0 1.5rem;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);

  cursor: pointer;
  &:hover {
    color: var(--color-primary-light);
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
