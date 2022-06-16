import styled from "styled-components"

const FooterStyled = styled.header`
    background-color: #66b0f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: aliceblue;
    margin-top: 2em;
    p {font-weight: bold;}
    `

export default function Footer () {
    return (
        <FooterStyled>
            <p>Todos os direitos reservados</p>
        </FooterStyled> 
    )
}