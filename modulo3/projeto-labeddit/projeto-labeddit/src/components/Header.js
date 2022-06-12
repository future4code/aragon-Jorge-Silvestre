import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"
import Avatar from '@mui/material/Avatar'
import Button from "@mui/material/Button"
import styled from "styled-components"



const HeaderStyled = styled.header`
    background-color: #66b0f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: aliceblue;
    padding: 0 17em 0 17em;
    button{
        color:aliceblue;
        margin: 1em;
    }
    section {
        flex-direction: column;
    }

`

export default function Header(props) {

    const navigate = useNavigate()
    const token = window.localStorage.getItem("token-labeddit")
    const email = window.localStorage.getItem("userEmail")

    const logout = () => {
        if (window.confirm("Tem certeza de que deseja sair?")) {
            window.localStorage.removeItem("token-labeddit")
            goToLogin(navigate)
            alert("Logout com sucesso!")
        }


    }

    return (
        <HeaderStyled>
            <h1>LabEddit</h1>
            {props.isProtected && (
                <>

                    <h3>Bem-Vindo </h3>
                    <section>
                        <p>
                            <Avatar
                                sx={{ margin: "auto" }} src="/broken-image.jpg"
                            />
                        </p>
                        <p>
                            {email}
                        </p>

                        <Button variant="outlined" onClick={logout}>Logout</Button>
                    </section>
                </>
            )}
        </HeaderStyled>
    )
}