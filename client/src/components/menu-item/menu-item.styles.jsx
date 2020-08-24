import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      background-color: hsl(20 50% 95% / 0.7);
      color: var(--color-primary-dark);
      border: 3px solid var(--color-primary-dark);
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  padding: 3rem 3rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--color-primary);
  background-color: hsl(20 50% 95% / 1);
  opacity: 0.95;
  position: absolute;
  color: var(--color-primary);
  border-radius: 50%;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 3.2rem;

  @media screen and (max-width: 1000px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 1.8rem;
  }
`;

export const ContentSubtitle = styled.span`
  text-transform: uppercase;
  font-size: 1.6rem;
`;
