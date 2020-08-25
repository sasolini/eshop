import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 30rem;
  align-items: center;
  position: relative;

  @media screen and (max-width: 800px) {
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 60%;
  min-width: 14rem;
  opacity: 0.7;
  position: absolute;
  top: 18rem;
  font-family: inherit;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 85%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 0.25rem 0.5rem;
`;

export const NameContainer = styled.span`
  /* margin-bottom: 15px; */
`;

export const PriceContainer = styled.span`
  color: var(--color-primary);
`;
