import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 1200px;

  & div:first-child {
    position: absolute;
    top: 18rem;
    left: 5rem;
    color: white;
    font-size: 5rem;
    font-weight: 300;

    @media screen and (max-width: 800px) {
      top: 14rem;
      font-size: 4rem;
    }

    @media screen and (max-width: 600px) {
      top: 12rem;
      left: 4rem;
      font-size: 3rem;
    }

    p {
      font-size: 2.5rem;
      margin-bottom: 2.2rem;

      @media screen and (max-width: 800px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 425px) {
        font-size: 1.6rem;
      }
    }

    button {
      font-family: inherit;
    }
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: auto;

    @media screen and (max-width: 600px) {
      min-width: 100%;
      min-height: 30rem;
    }
  }
`;
