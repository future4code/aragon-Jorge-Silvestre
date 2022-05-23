import {useNavigate} from "react-router-dom"
import { navigateToHome } from "../routes/cordinator"

function Header() {
    const navigate = useNavigate()

    return(
        <section>
            <h1>LabeX</h1>
            <button onClick={() => navigateToHome(navigate)}>Entrar</button>
        </section>
    )
}

export default Header