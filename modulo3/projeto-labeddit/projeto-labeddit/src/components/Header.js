import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"

export default function Header(props) {
    const navigate = useNavigate()
    const token = window.localStorage.getItem("token-labeddit")

    const logout = () => {
        if (window.confirm("Tem certeza de que deseja sair?")) {
            window.localStorage.removeItem("token-labeddit")
            goToLogin(navigate)
            alert("Logout com sucesso!")
        }


    }

    return (
        <>
            <h1>LabEddit</h1>
            {props.isProtected && (
                <>
                <h3>Bem-Vindo</h3>
                <button onClick={logout}>Logout</button>
                </>
            )}
        </>
    )
}