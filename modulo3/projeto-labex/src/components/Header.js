import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { navigateToAdmin, navigateToHome } from "../routes/cordinator"

function Header() {
    const navigate = useNavigate()
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const handleInputEmail = (event) => {
        setInputEmail(event.target.value)
    }

    const handleInputPassword = (event) => {
        setInputPassword(event.target.value)
    }

    const login = () => {
        const body = {
            email: inputEmail,
            password: inputPassword
        }

        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login", body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                alert("login realizado com sucesso!")
                navigateToAdmin(navigate)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }


    const logout = () => {
        localStorage.removeItem("token")
        navigateToHome(navigate)
    }

    const renderHeader = localStorage.getItem("token") ? (
        <button onClick={logout}>Logout</button>

    ) : (
        <>
            <label htmlFor="email" name="email">Email:</label>
            <input onChange={handleInputEmail} id="email" type="text" value={inputEmail} />
            <br />
            <label htmlFor="password" name="password">Senha:</label>
            <input onChange={handleInputPassword} id="password" type="password" value={inputPassword} />
            <br />
            <button onClick={login}>Entrar</button>
        </>
    )

    
    return (
        <section>
            <h1>LabeX</h1>
            {renderHeader}
        </section>
    )
}

export default Header