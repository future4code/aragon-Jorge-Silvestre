import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import { goToSignUp } from "../routes/coordinator";
import { requestLogin } from "../services/requests";

export default function LoginPage() {
    useUnprotectedPage()

    const navigate = useNavigate()

    const {form, onChange, clear} = useForm({email: "", password: ""})

    const login = (e) => {
        e.preventDefault()
        requestLogin(form, clear, navigate)
    }


    return (
        <>
            <Header
                isProtected={false} 
            />
            <hr />
            <main>
                <h2>Login</h2>
                <form onSubmit={login}>
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="email" name="email" onChange={onChange} value={form.email} required/>
                    <br/>
                    <label htmlFor="senha">Senha:</label>
                    <input id="senha" name="password" onChange={onChange} value={form.password} type="password" required/>
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