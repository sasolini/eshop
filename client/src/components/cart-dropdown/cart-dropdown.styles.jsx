import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 28rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid var(--color-primary);
  background-color: white;
  top: 7rem;
  right: 1.5rem;
  z-index: 5;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 29rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
