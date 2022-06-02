import styled from "styled-components";

export const Div = styled.div`
display: flex;
flex-direction: column;
width: 50%;
margin: 10px auto;
align-items: center;
border: 1px solid black;
button {margin: 10px 0}
a {text-decoration: none; color: #000; &:hover {
    text-decoration: underline;
}}
&:hover {
    background-color: lightblue;
}
`
export const Span = styled.span`
margin: 0 10px;
`