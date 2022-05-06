import styled from "styled-components";

export const PlaylistCard = styled.li`
display: flex;
justify-content: space-between;
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
&:hover {
    cursor: pointer;
    background-color: lightblue;
}
`