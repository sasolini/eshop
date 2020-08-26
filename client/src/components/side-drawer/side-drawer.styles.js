import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/logo.svg';

export const SideDrawerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 101vh;
  width: 0;
  overflow: hidden;
  display: flex;
  z-index: 1000;
  transition: 300ms ease all;

  &.open {
    width: 100vw;
  }
`;

export const SideDrawerMenu = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-primary);

  nav {
    @media only screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      padding: 1rem 1rem;
      margin: 7rem;

      a {
        display: inline-block;
        width: 20rem;
        text-align: center;
        padding: 2rem 0;
        border-bottom: 1px solid white;
      }

      div {
        display: none;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        margin: 2rem 0;
      }
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 3rem;
  line-height: 3rem;
  background-color: unset;
  border: unset;
  outline: none;
  color: white;
  padding: 2rem;
  cursor: pointer;
  justify-self: end;

  &:hover {
    // color: var(--color-secondary);
  }
`;

export const LogoContainer = styled(Logo)`
  margin-bottom: 8rem;
`;

export const BackDrop = styled.div`
  width: 30%;
  height: 100%;
  background-color: hsl(0 0% 0% / 0.33);
`;
