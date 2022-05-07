import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import {PlaylistCard} from "./styled"
import { Div } from "./styled";

export default class PaginaPlaylists extends React.Component{
    state = {
        playlists: []
    }

    componentDidMount(){
        this.pegaPlaylists()
    }

    pegaPlaylists = () => {
        axios.get(`${BASE_URL}`,
        {
            headers: {
                Authorization: "jorge-silvestre-aragon"
            }
        }
        )
        .then((response) => this.setState({playlists: response.data.result.list}))
        .catch((error) => console.log(error))
    }

    delPlaylist = (id) => {
        axios
            .delete(`${BASE_URL}/${id}
            `,
                {
                    headers: {
                        Authorization: "jorge-silvestre-aragon"
                    }
                }
            )
            .then((response) => {
                alert("Playlist Deletada com sucesso!")
                this.pegaPlaylists()
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render(){
        const playlists = this.state.playlists.map((playlist) => {
            return <PlaylistCard 
                key={playlist.id}>
                {playlist.name}
                <button onClick={() => this.props.vaiParaTelaDetalhes(playlist.id)}>Detlhes</button>
                <button onClick={() => this.delPlaylist(playlist.id)}>Apagar</button>
            </PlaylistCard>
        })

        return(
            <Div>
            <h2>Playlists</h2>    
            <ul>
                {playlists}
            </ul>
            <button onClick={() => this.props.mudarTela("criarplaylist")}>Ir para tela de Criar Plailysts</button>
            </Div>
        )
    }
}