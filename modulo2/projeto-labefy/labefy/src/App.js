import React from "react";
import PaginaCriarPlaylists from "./pages/PaginaCriarPlaylists/PaginaCriarPlaylists";
import PaginaPlaylists from "./pages/PaginaPlaylists/PaginaPlaylists";
import PaginaDetalhesPlaylists from "./pages/PaginaDetalhesPlaylists/PaginaDetalhesPlaylists";

export default class App extends React.Component {
  state = {
    telaAtual: "criarplaylist",
    playlistId: ""
  }

  
  escolhePagina = () => {
    switch (this.state.telaAtual){
      case "criarplaylist":
        return <PaginaCriarPlaylists mudarTela={this.mudaDeTela}/>
      case "playlists":
        return <PaginaPlaylists mudarTela={this.mudaDeTela} vaiParaTelaDetalhes={this.vaiParaTelaDetalhes}/>
        case "detalhesplaylist":
          return <PaginaDetalhesPlaylists mudarTela={this.mudaDeTela} id={this.state.playlistId}/>  
      default:
        <PaginaCriarPlaylists />
    }
  }

  vaiParaTelaDetalhes = (id) => {
    this.setState({telaAtual: "detalhesplaylist", playlistId: id})
  }

  mudaDeTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela})
  }

  render() {
    return (
      <div>
        {this.escolhePagina()}
      </div>
    );
  }

}


