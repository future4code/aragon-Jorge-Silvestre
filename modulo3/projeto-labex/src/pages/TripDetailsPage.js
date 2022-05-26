import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useRequestData } from "../hooks/useRequestData"
import { navigateToHome, navigateToAdmin } from "../routes/cordinator"


function TripDetailsPage() {

    const params = useParams()

    const [data] = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/${params.tripId}`, {})

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("token")) {

            alert("Você precisa se logar para acessar essa página!")
            navigateToHome(navigate)
        }
    }, [])

    const candidatesList = data.trip?.candidates.map((candidate) => {
        <div key={candidate.id}>
            <p>Nome:{candidate.name}</p>
            <p>Profissão:{candidate.profession}</p>
            <p>Idade:{candidate.age}</p>
            <p>País:{candidate.country}</p>
            <p>Texto de Candidatura:{candidate.applicationText}</p>
        </div>
    })

    console.log(data)
    return (
        <section>
            <button onClick={() => navigateToAdmin(navigate)}>Voltar</button>
            <h1>Viagem:{data.trip?.name}</h1>
            <hr/>
            <h2>Lista de Candidatos</h2>
            {candidatesList}
        </section>
    )
}

export default TripDetailsPage