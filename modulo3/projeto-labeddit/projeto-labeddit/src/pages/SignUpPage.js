import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goBack, goToFeed } from "../routes/coordinator";

export default function SignUpPage() {
    const navigate = useNavigate()
    const [form, setform] = useState({
        username: "",
        email: "",
        password: ""
    })

    const onChangeForm = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const signup = (e) => {
        e.preventDefault()
        axios.post("https://labeddit.herokuapp.com/users/signup", form)
            .then((res) => {
                alert("Usuario cadastrado com sucesso")
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
            <main>
                <h2>Cadastro de Novo Usuário</h2>
                <form onSubmit={signup}>
                    <label htmlFor="nome">Nome:</label>
                    <input id="nome" name="username" onChange={onChangeForm} value={form.username} required />
                    <br />
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" name="email" onChange={onChangeForm} value={form.email} required/>
                    <br />
                    <label htmlFor="senha">Senha:</label>
                    <input id="senha" name="password" onChange={onChangeForm} value={form.password} type="password" required/>
                    <br />
                    <button>cadastrar</button>
                </form>
                <button onClick={() => goBack(navigate)}>Voltar</button>
            </main>
        </>
    )
}