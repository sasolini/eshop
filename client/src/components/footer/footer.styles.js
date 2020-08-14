import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  height: 25rem;
  background-color: #28150e;
  color: #fcf9f8;
  margin-top: 2rem;
  padding: 3rem 0;

  & div {
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 1.6rem;
      text-transform: uppercase;
    }

    hr {
      width: 30%;
      margin: 1rem 0;
    }

    a {
      font-size: 1.4rem;
      padding: 0.25rem 0;
      text-transform: capitalize;
    }
  }
`;
