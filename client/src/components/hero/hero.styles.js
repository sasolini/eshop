import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 1200px;

  @media screen and (max-width: 425px) {
    max-height: 35rem;
  }

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
      left: 3rem;
      font-size: 3rem;
    }

    @media screen and (max-width: 425px) {
      top: 11rem;
      left: 1rem;
      font-size: 2.8rem;
      text-align: center;
    }

    p {
      font-size: 2.5rem;
      margin-bottom: 2.2rem;

      @media screen and (max-width: 800px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 600px) {
        font-size: 1.8rem;
      }

      @media screen and (max-width: 425px) {
        display: none;
      }
    }

    button {
      display: inline-block;
      font-family: inherit;

      @media screen and (max-width: 425px) {
        margin-top: 2rem;
      }
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

    @media screen and (max-width: 425px) {
      min-width: 130%;
      min-height: 30rem;
    }
  }
`;
