import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"

export default function Header() {
    const navigate = useNavigate()
    const token = window.localStorage.getItem("token-labeddit")

    const logout = () => {
        window.localStorage.removeItem("token-labeddit")
        goToLogin(navigate)
    }

    return (
        <>
            <h1>LabEddit</h1>
            {   token 
                    ? <button onClick={logout}>Logout</button>
                    : <p>Faça login</p>
            }
        </>
    )
}