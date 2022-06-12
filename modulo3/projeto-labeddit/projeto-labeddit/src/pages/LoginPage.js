import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import { goToSignUp } from "../routes/coordinator";
import { requestLogin } from "../services/requests";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "../components/Footer";
import style from "styled-components"

const Section = style.section`
    width: 100%;
    position: absolute;
    bottom: 0;
`

export default function LoginPage() {
    useUnprotectedPage()

    const navigate = useNavigate()

    const { form, onChange, clear } = useForm({ email: "", password: "" })

    const login = (e) => {
        e.preventDefault()
        requestLogin(form, clear, navigate)
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
                        <h2>Login</h2>
                        <form onSubmit={login}>

                            <TextField label="E-mail:" id="email" type="email" name="email" onChange={onChange} value={form.email} required variant="outlined" fullWidth />
                            <br />

                            <TextField label="Senha:" id="senha" name="password" onChange={onChange} value={form.password} type="password" required variant="outlined" fullWidth />
                            <br />
                            <Button type="submit" variant="outlined" fullWidth>Entrar</Button>
                        </form>
                        <hr />
                        <h3>Não tem cadastro? Clique no botão a seguir para se cadastrar:</h3>
                        <Button variant="outlined" onClick={() => goToSignUp(navigate)}>Ir para cadastro</Button>
                    </main>
                </Box>
            </Container>
            <Section>
                <Footer />
            </Section>
        </>

    )
}