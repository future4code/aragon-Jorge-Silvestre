import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToFeed, goToSignUp } from "../routes/coordinator";

export default function LoginPage() {
    const navigate = useNavigate()
    const [form, setform] = useState({
        email:"",
        password: ""
    })

    const onChangeForm = (e) => {
        setform({...form, [e.target.name]: e.target.value})
    }

    const login = (e) => {
        e.preventDefault()
        axios.post("https://labeddit.herokuapp.com/users/login", form)
            .then((res) => {
                alert("Login realizado com sucesso")
                window.localStorage.setItem("token-labeddit",res.data.token)
                goToFeed(navigate)
            })
            .catch((err) => {
                console.error("Erro ao se cadastrar")
                console.log(err)
            })
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token-labeddit")
        if(token) {
            goToFeed(navigate)
        }
    },[])

    return (
        <>
            <Header />
            <hr />
            <main>
                <h2>Login</h2>
                <form onSubmit={login}>
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" name="email" onChange={onChangeForm} value={form.email} required/>
                    <br/>
                    <label htmlFor="senha">Senha:</label>
                    <input id="senha" name="password" onChange={onChangeForm} value={form.password} type="password" required/>
                    <br/>
                    <button>Entrar</button>
                </form>
                <hr />
                <h3>Não tem cadastro? Clique no botão a seguir para se cadastrar:</h3>
                <button onClick={() => goToSignUp(navigate)}>Ir para cadastro</button>
            </main>
        </>
    )
}