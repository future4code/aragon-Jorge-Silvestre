import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useRequestData } from "../hooks/useRequestData";


function HomePage() {
  const [data, isLoading] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips", {})


  // const [tripsList, setTripsList] = useState([])

  // const getTripsList = () => {
  //   axios
  //     .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips")
  //     .then((res) => {
  //       setTripsList(res.data.trips)
  //     })
  //     .catch((err) => {
  //       console.log(err.response)
  //     })
  // }

  // useEffect(() => {
  //   getTripsList()
  // }, [])

  const trips = data.trips?.map((trip) => {
    return (
      <li key={trip.id}>
        <p>Nome:{trip.name}</p>
        <p>Descricão: {trip.description}</p>
        <p>Planeta:{trip.planet}</p>
        <p>Duração:{trip.durationInDays}</p>
        <p>Data:{trip.date}</p>
        <hr />
      </li>
    )
  })


  return (
    <section>
      <Header />
      <hr />
      <h2>Inscreva-se numa nova viagem!</h2>
      <hr />
      <h2>Lista de Viagens</h2>

      {isLoading ? (
        <p>carregando...</p>
      ) : (
        <ul>{trips}</ul>
      )}

    </section>
  );
}

export default HomePage;
