import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default class PaginaCriarPlaylists extends React.Component{
    state = {
        inputNamePlaylist: ""
    }
    
    onChangeInputName = (event) => {
        this.setState({inputNamePlaylist: event.target.value});
    };

    createPlaylist = () => {
        const body = {
          name: this.state.inputNamePlaylist
        }

        axios
          .post(`${BASE_URL}`,
            body,
            {
              headers: {
                Authorization: "jorge-silvestre-aragon"
              }
            }
          )
          .then((response) => {
            alert("Playlist Cadastrada com Sucesso!")
            this.setState({inputNamePlaylist: ""})
          })
          .catch((error) => {
            alert(error.response.data.message)
          })
      }

    render(){
        return(
            <div>
                <h2>Crie uma Plailyst de Músicas</h2>
                <label>
                    Nome da Playlist:
                    <input type="text"
                        value={this.state.inputNamePlaylist}
                        onChange={this.onChangeInputName}
                    />
                </label>
                <button onClick={this.createPlaylist}>Cadastrar Usuario</button>
                <button onClick={() => this.props.mudarTela("playlists")}>Ir para tela de Plailysts</button>
            </div>
        )
    }
}