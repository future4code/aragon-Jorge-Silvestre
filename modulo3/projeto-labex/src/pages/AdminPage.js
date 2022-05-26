import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useRequestData } from "../hooks/useRequestData"
import { navigateToHome, navigateToTripDetails } from "../routes/cordinator"

function AdminPage() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const [data, isLoading, getData] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips")


    useEffect(() => {
        if (!token) {
            navigateToHome(navigate)
        }
    }, [])



   const deleteTrip = (id) => {
        const header = {
            headers: {
                auth:localStorage.getItem("token")
            }
        }

       axios
       .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips/${id}`,header)
       .then((res) => {
            alert("Viagem excluida com sucesso!")
             getData()
       })
       .catch((err) => {
        console.log(err.response.data)
       })
   }



    const trips = data?.trips.map((trip) => {
        return (
            <li key={trip.id}>
                <p>Nome:{trip.name}</p>
                <p>Descricão: {trip.description}</p>
                <p>Planeta:{trip.planet}</p>
                <p>Duração:{trip.durationInDays}</p>
                <p>Data:{trip.date}</p>
                <button onClick={() => navigateToTripDetails(navigate,trip.id)}>Detalhes</button>
                <button onClick={() => deleteTrip(trip.id)}>Remover</button>
                <hr />
            </li>
        )
    })

    return (
        <section>
            <Header />
            <hr />
            <h2>Crie uma nova viagem</h2>
            <hr />
            <h2>Lista de Viagens</h2>
            
                {isLoading ? (
                    <p>carregando...</p>
                ) : (
                    <ul>{trips}</ul>
                )}
            
        </section>
    )
}

export default AdminPage