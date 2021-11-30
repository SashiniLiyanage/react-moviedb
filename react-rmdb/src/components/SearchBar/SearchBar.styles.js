import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    background: var(--darkGrey);
    padding: 0 20px; 
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 30px;
    background-color: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img{
        position: absolute;
        left: 12px;
        top: 5px;
        width: 20px;
    }

    input{
        font-size: 15px;
        position: absolute;
        left: 0;
        top:0;
        bottom: 10px;
        margin: 8px 0;
        padding: 0 0 0 45px;
        border:0;
        background: transparent;
        height:15px;
        color: var(--white);

        :focus{
            outline: none;
        }
    }
`;