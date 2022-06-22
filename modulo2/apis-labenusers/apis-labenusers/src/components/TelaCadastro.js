import React from "react"
import axios from "axios";
import styled from "styled-components"

const Section = styled.section`
display: flex;
flex-direction: column;
width: 300px;
margin: 30px auto;
text-align: center;
border: 1px solid black;
label {margin-bottom:10px;}
button {
  margin:10px auto;
}
` 

export default class TelaCadastro extends React.Component {
    state = {
        inputName: "",
        inputEmail: ""
    }

    onChangeInputName = (event) => {
        this.setState({inputName: event.target.value});
    };

    onChangeInputEmail = (event) => {
        this.setState({inputEmail: event.target.value});
    };

    createUser = () => {
        const body = {
          name: this.state.inputName,
          email: this.state.inputEmail
        }
    
        axios
          .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
              headers: {
                Authorization: "jorge-silvestre-aragon"
              }
            }
          )
          .then((response) => {
            alert("Usuário(a) Cadastrado(a) com Sucesso!")
            this.setState({inputName: "", inputEmail: ""})
          })
          .catch((error) => {
            alert(error.response.data.message)
          })
      }

    render() {
        return (
            <Section>
              <h2>Cadastro</h2>
                <label>
                    Nome:
                    <input type="text"
                        value={this.state.inputName}
                        onChange={this.onChangeInputName}
                    />
                </label>

                <label>
                    Email:
                    <input type="email"
                        value={this.state.inputEmail}
                        onChange={this.onChangeInputEmail}
                    />
                </label>

                <button onClick={this.createUser}>Cadastrar Usuario</button>

                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
            </Section>
        )
    }
}