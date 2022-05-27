import Header from "../components/Header";
import { API_CLIENT, BASE_URL } from "../constants/urls";
import { useRequestData } from "../hooks/useRequestData";


function HomePage() {
  const [data, isLoading] = useRequestData(`${BASE_URL}/${API_CLIENT}/trips`, {})



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
