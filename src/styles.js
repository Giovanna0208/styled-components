import styled from 'styled-components';

export const Container = styled.div `
    text-align: center;
`;

export const Header = styled.header `
    background-color: ${props => props.theme.colors.wheat} ;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img `
    height: 100px;
    animation: App-logo-spin infinite 9s linear;
    @keyframes App-logo-spin {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
`;

export const p = styled.p `
    font-size: calc(10px + 2vmin);
    color: IndianRed;
    font-family: Impact, fantasy;
`;
