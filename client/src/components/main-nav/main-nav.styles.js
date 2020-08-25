import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OptionsContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 3.8rem 2rem 0 0;
  font-size: 1.8rem;
  color: white;

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    width: 20%;
  }
`;

export const OptionLink = styled(Link)`
  text-transform: uppercase;
  padding: 10px 15px;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
