import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 15px;
`;

export const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartItemImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
