import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px 40px;

    h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    width: 100%;
    text-align: center;

`;

