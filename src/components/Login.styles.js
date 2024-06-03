import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;

`;
export const Content = styled.div`
    max-width: 320px;
    padding: 20px;
    height: fit-content;
    color: var(--darkGrey);

    input{
        width: 100%;
        height: 30px;
        border: 1px solid var(--darkGrey);
        border-radius: 20px;
        margin: 10px 0;
        padding: 10px;
    }

    .error{
        color: red;
    }
`;

