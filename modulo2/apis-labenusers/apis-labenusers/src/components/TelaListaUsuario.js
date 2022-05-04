import React from "react";
import axios from "axios";
import styled from "styled-components"

const Section = styled.section`
text-align: center;
margin-top: 50px;
`

const CardUsuario = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;
    width: 300px;
    margin: 10px auto;
`

export default class TelaListaUsuario extends React.Component {
    state = {
        userLists: []
    }

    componentDidMount() {
        this.getAllUssers()
    }

    getAllUssers = async () => {
        // axios
        // .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        //     {
        //         headers: {
        //             Authorization: "jorge-silvestre-aragon"
        //         }
        //     }
        // )
        // .then((response) => {
        //     this.setState({userLists: response.data})
        // })
        // .catch((error) => {
        //     alert("Ocorreu um problema, tente novamente")
        // })
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                {
                    headers: {
                        Authorization: "jorge-silvestre-aragon"
                    }
                })

            this.setState({ userLists: response.data })
        } catch (error) {
            alert("Ocorreu um problema, tente novamente")
        }
    }

    delUsser = (id) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}
            `,
                {
                    headers: {
                        Authorization: "jorge-silvestre-aragon"
                    }
                }
            )
            .then((response) => {
                alert("Usuário(a) Deletado(a) com sucesso!")
                this.getAllUssers()
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        const listaUsuarios = this.state.userLists.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.delUsser(user.id)}>Apagar</button>
                </CardUsuario>
            )
        })

        return (
            <Section>
                <h2>Lista de Usuários Cadastrados</h2>
                {listaUsuarios}
                <button onClick={this.props.irParaCadastro}>Ir Para Cadastro</button>
            </Section>
        )
    }
}