import React, { useState } from "react";
import Header from "./components/Header"
import MatchesPage from "./pages/MatchesPage/MatchesPage"
import PerfisPage from "./pages/PerfisPage/PerfisPage" 
import Footer from "./components/Footer";

function App() {

  const [telaAtual, setTelaAtual] = useState("Perfis")
  const [nomeDoBotao, setNomeDoBotao] = useState("Perfis")

  const selecionaPagina = () => {
    switch (telaAtual){
      case "Perfis":
        return <PerfisPage />
      case "Matches":
        return <MatchesPage />
      default:
        return <PerfisPage />      
    }
  }

  const mudaPagina = () => {
    if (telaAtual === "Perfis"){
      return setTelaAtual("Matches")
    }else {
      return setTelaAtual("Perfis")
    }
  }

  const nomeBotao = () => {
    if (telaAtual === "Perfis"){
      return "Ir para matches"
    }else {
      return "Ir para perfis"
    }
  }

  return (
    <main className="App">
      <Header mudaPagina={mudaPagina} nomeBotao={nomeBotao}/>      
      {selecionaPagina()}
      <Footer />
    </main>
  );
}

export default App;
