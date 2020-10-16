import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore

export const GlobalStyle = createGlobalStyle `
html {
    height: 100%;
    display:block;
    margin: 0 auto;
}
body {
    background-color: dodgerblue;
    color: #fff;
}
* {
    box-sizing: border-box;
    font-family: Arial;
    text-align:center;
}
`;

export const Wrapper = styled.div `
    .score {
        color: #000;
        font-size: 2rem;
    }
    .start, .next {
        cursor: pointer;
        margin: 10px;
        border: 2px solid #ccc;
        padding: 5px;
        background-color: grey;
        color:#fff;
        outline: none;
    }
`;

export const QuestionStyles = styled.div `
    button {
        padding:5px;
        background-color: #fff;
        margin: 2px;
        color:blue;
    }
`;

