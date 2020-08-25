import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  /* width: 4.5rem; */
  height: 4.5rem;
  padding-bottom: 1.3rem;
  padding-left: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 2.4rem;
  height: 2.4rem;
  fill: white;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 1.9rem;
  right: 0.9rem;
`;
