import styled from "styled-components";

export const Div = styled.div`
display: flex;
flex-direction: column;
width: 50%;
margin: 10px auto;
align-items: center;
border: 1px solid black;
button {margin: 10px 0}
label {margin: 10px 0}
&:hover {
    cursor: pointer;
    background-color: lightblue;
}
`