import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import { Div } from "./styled";
import { Span } from "./styled";

export default class PaginaDetalhesPlaylists extends React.Component{
    state = {
        musicas: []
    }

    componentDidMount() {
        this.pegaMusicas(this.props.id)
    }

    pegaMusicas = (id) => {
        axios.get(`${BASE_URL}/${id}/tracks`,
        {
            headers: {
                Authorization: "jorge-silvestre-aragon"
            }
        }
        )
        .then((response) => this.setState({musicas: response.data.result.tracks}))
        .catch((error)=>console.log(error.response))
    }


    render() {
        console.log(this.state.musicas)
        const musicas = this.state.musicas.map((musica) => {
            return (
            <p key={musica.id}><Span><span>Musica:</span> {musica.name} </Span>
            <Span><span>Artista:</span> {musica.artist }</Span>
            <a href={ musica.url} target="_blank">Assista no YouTube</a>    
            </p>
            ) 
        })


        return(
            <Div>
                <h2>Musicas da Playlist Escolhida</h2>
                {musicas}
                <button onClick={() => this.props.mudarTela("playlists")}>Ir para tela de Plailysts</button>
            </Div>
        )
    }
}