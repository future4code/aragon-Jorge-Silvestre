import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
    {
    nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"
    },
    {
    nomeUsuario: "Ana",
    fotoUsuario: "https://picsum.photos/50/51",
    fotoPost: "https://picsum.photos/200/151"
    },
    {
    nomeUsuario: "Julia",
    fotoUsuario: "https://picsum.photos/50/52",
    fotoPost: "https://picsum.photos/200/152"
    }
  ]}

  render() {
    const listaDePosts = this.state.posts.map((pessoa) => {
      return(
        <main>
        <header>
        <img>src={pessoa.fotoUsuario} alt={'Imagem do usuario'}</img>
        <p>{pessoa.nomeUsuario}</p>
        </header>
        <img>src={pessoa.fotoPost} alt={'Imagem do post'}</img>
        </main>
      )
    })
    return (
      <MainContainer>
        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
