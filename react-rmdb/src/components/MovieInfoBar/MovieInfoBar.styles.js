import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-height:100px;
    background: var(--darkGrey);
    padding: 0 20px;

`;
export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 2rem;
    width: 100%;

    .link{
        text-decoration: none;

        :hover {
            opacity: 0.8;
        }
    }

    @media screen and (max-width: 768px){
        display: block;

        .column{
            margin: 20px 0;
        }
    }
`;


export const Tag = styled.div`
    background-color: var(--medGrey);
    border-radius: 40px;
    padding: 10px 0;
    margin: 10px;
    color: var(--white);
    font-weight: 800;
    text-align: center;
    text-transform: capitalize;
`;