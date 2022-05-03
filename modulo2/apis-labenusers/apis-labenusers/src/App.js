import './App.css';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    userLists: [],
    inputName: "",
    inputEmail: ""
  };

  componentDidMount = () => {
    this.getAllUssers()
  }

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  getAllUssers = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "jorge-silvestre-aragon"
          }
        }
      )
      .then((response) => {
        this.setState({ userlists: response.data.name })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

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
        this.getAllUssers()
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  render() {
    return (
      <main>
        <section>
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

          <button onClick={this.createUser}>Criar Usuario</button>

          <button>Trocar de Tela</button>
        </section>
        <section>
          {this.state.userLists.map((user) => {
            return <p key={user.id}>{user.name}</p>;
          })}
        </section>
      </main>
    );
  }


}

