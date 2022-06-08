import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import { goBack } from "../routes/coordinator";
import { requestSignup } from "../services/requests";

export default function SignUpPage() {
    useUnprotectedPage()
    const navigate = useNavigate()

    const { form, onChange, clear } = useForm({ name: "", email: "", password: "" })


    const signup = (event) => {
        event.preventDefault()

        requestSignup(form, clear, navigate)
    }


    return (
        <>
            <Header
                isProtected={false}
            />
            <main>
                <h2>Cadastro de Novo Usuário</h2>
                <form onSubmit={signup}>
                    <label htmlFor="name">Nome:</label>
                    <input id="name" name="name" onChange={onChange} title="O nome deve ter no mínimo 3 caracteres" value={form.name} required />
                    <br />
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" name="email" onChange={onChange} value={form.email} required />
                    <br />
                    <label htmlFor="senha">Senha:</label>
                    <input id="senha" name="password" onChange={onChange} title="A senha deve ter no mínimo 8 e no máximo 30 caracteres" value={form.password} type="password" required />
                    <br />
                    <button>cadastrar</button>
                </form>
                <button onClick={() => goBack(navigate)}>Voltar</button>
            </main>
        </>
    )
}