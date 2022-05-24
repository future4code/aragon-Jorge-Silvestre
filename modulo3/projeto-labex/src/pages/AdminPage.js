import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { navigateToHome } from "../routes/cordinator"

function AdminPage() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigateToHome(navigate)
        }
    }, [])



    return (
        <section>
            <Header />
            <hr />
            <h2>Crie uma nova viagem</h2>
            <hr />
            <h2>Lista de Viagens</h2>
        </section>
    )
}

export default AdminPage