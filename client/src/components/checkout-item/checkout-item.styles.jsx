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

  @media screen and (max-width: 425px) {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 5rem 20rem 5rem;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1.5rem;

  @media screen and (max-width: 425px) {
    grid-area: 2 / 1 / 3 / 3;
    padding: 1rem;
  }

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const ItemName = styled.span`
  @media screen and (max-width: 425px) {
    grid-area: 1 / 1 / 1 / 2;
    justify-self: start;
  }
`;

export const ItemPrice = styled.span`
  @media screen and (max-width: 425px) {
    grid-area: 3 / 2 / 4 / 3;
    justify-self: end;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;

  @media screen and (max-width: 425px) {
    grid-area: 3 / 1 / 4 / 2;
    justify-self: start;

    &:before {
      content: 'Quantity: ';
      margin-right: 1rem;
    }
  }

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

  @media screen and (max-width: 425px) {
    grid-area: 1 / 2 / 2 / 3;
    justify-self: end;
  }

  &:hover {
    color: red;
  }
`;
