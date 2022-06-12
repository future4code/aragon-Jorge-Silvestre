import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import { goBack } from "../routes/coordinator";
import { requestSignup } from "../services/requests";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import CssBaseline from '@mui/material/CssBaseline'
import Footer from "../components/Footer";
import style from "styled-components"

const Section = style.section`
    width: 100%;
    position: absolute;
    bottom: 0;
`


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
            <Container>
                <CssBaseline />
                <Box
                    sx={{
                        textAlign: "center",
                        marginTop: 7,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& .MuiTextField-root': { margin: 1 },
                        '& .MuiButton-root': { margin: 1 }
                    }}
                >
                    <main>
                        <h2>Cadastro de Novo Usuário</h2>
                        <form onSubmit={signup}>
                            <TextField label="Nome:" id="name" name="name" onChange={onChange} title="O nome deve ter no mínimo 3 caracteres" value={form.name} required variant="outlined" fullWidth />
                            <br />
                            <TextField label="E-mail:" id="email" name="email" onChange={onChange} value={form.email} required variant="outlined" fullWidth />
                            <br />
                            <TextField label="Senha:" id="senha" name="password" onChange={onChange} title="A senha deve ter no mínimo 8 e no máximo 30 caracteres" value={form.password} type="password" required variant="outlined" fullWidth />
                            <br />
                            <Button type="submit" variant="outlined" fullWidth>cadastrar</Button>
                        </form>
                        <Button variant="outlined" onClick={() => goBack(navigate)}>Voltar</Button>
                    </main>
                </Box>
            </Container>
            <Section>
                <Footer />
            </Section>
        </>
    )
}