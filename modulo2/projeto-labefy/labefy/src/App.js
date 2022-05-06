import React from "react";
import PaginaCriarPlaylists from "./pages/PaginaCriarPlaylists/PaginaCriarPlaylists";
import PaginaPlaylists from "./pages/PaginaPlaylists/PaginaPlaylists";

export default class App extends React.Component {
  state = {
    telaAtual: "criarplaylist"
  }

  escolhePagina = () => {
    switch (this.state.telaAtual){
      case "criarplaylist":
        return <PaginaCriarPlaylists mudarTela={this.mudaDeTela}/>
      case "playlists":
        return <PaginaPlaylists mudarTela={this.mudaDeTela}/>
      default:
        <PaginaCriarPlaylists />
    }
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


