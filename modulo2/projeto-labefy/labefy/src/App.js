import React from "react";
import PaginaCriarPlaylists from "./pages/PaginaCriarPlaylists/PaginaCriarPlaylists";
import PaginaPlaylists from "./pages/PaginaPlaylists/PaginaPlaylists";

export default class App extends React.Component {
  state = {
    telaAtual: "playlists"
  }

  escolhePagina = () => {
    switch (this.state.telaAtual){
      case "criarplaylist":
        return <PaginaCriarPlaylists />
      case "playlists":
        return <PaginaPlaylists />
      default:
        <PaginaCriarPlaylists />
    }
  }

  render() {
    return (
      <div>
        {this.escolhePagina()}
      </div>
    );
  }

}


