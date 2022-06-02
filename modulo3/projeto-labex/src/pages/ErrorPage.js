import { useNavigate } from "react-router-dom"
import {navigateToHome} from "../routes/cordinator"

function ErrorPage() {
    const navigate = useNavigate()

    return(
        <section>
            <h1>Página não encontrada</h1>
            <button onClick={() => navigateToHome(navigate)}>Voltar para página inicial</button>
        </section>
    )
}

export default ErrorPage