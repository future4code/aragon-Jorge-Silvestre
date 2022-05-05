import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import {PlaylistCard} from "./styled"

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

    render(){
        const playlists = this.state.playlists.map((playlist) => {
            return <PlaylistCard key={playlist.id}>{playlist.name}</PlaylistCard>
        })

        return(
            <ul>
                {playlists}
            </ul>
        )
    }
}