import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 18fr 44fr 15fr 15fr 8fr;
  grid-template-rows: 15rem;
  justify-items: center;
  border-bottom: 1px solid var(--color-primary);
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1.5rem;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }

  & .disabled {
    opacity: 0.25;
  }
`;

export const RemoveButtonContainer = styled.div`
  cursor: pointer;
  padding: 1rem;

  &:hover {
    color: red;
  }
`;
