import { useNavigate } from "react-router-dom"
import { goToFeed } from "../routes/coordinator"

export default function ErrorPage() {
    const navigate = useNavigate()

    return(
        <>
        <h1>Error 400 - Página não encontrada!</h1>
        <button onClick={() => goToFeed(navigate)}>Ir para Feed</button>
        </>
    )
}