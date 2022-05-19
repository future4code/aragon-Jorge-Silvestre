import React, { useEffect, useState } from "react";
import axios from "axios";

function MatchesPage() {

    const [matches, SetMatch] = useState([])

    useEffect(() => {
        listaMatches()
    }, [])

    const listaMatches = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jorge-silvestre-aragon/matches")
            .then((res) => {
                SetMatch(res.data.matches)
            })
            .catch((err) => {
                console.error(err.data)
            })
    }

    const todosMatches = matches.map((match) => {
        return (<section key={match.id}>
            <img src={match.photo} />
            <p>{match.name}</p>
        </section>
        )
    })

    
    return (
        <div>
            {todosMatches}
        </div>
    )
}

export default MatchesPage