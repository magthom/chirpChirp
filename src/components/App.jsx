import React, { Component } from 'react';
import SubmitChirp from './SubmitChirp';
import Timeline from './Timeline';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
    newUser: "",
    newMessage: "",
    chirps: [
      {
        name: "Maggie",
        message: "what"
      },
      {
        name: "junie",
        message: "no"
      },
      {
        name: "steve",
        message: "family fued"
      }
    ]
  }

  this.handleNewUser = this.handleNewUser.bind(this);
  this.handleNewMessage = this.handleNewMessage.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleNewUser (e) {
    this.setState({ newUser: e.target.value });
  }

  handleNewMessage (e) {
    this.setState({ newMessage: e.target.value });
  }
  handleSubmit() {
    let newChirp = {
      name: this.state.newUser,
      message: this.state.newMessage
    }
    this.setState({ chirps: [...this.state.chirps, newChirp] })
  }

  render() {
    return (
      <div className="container">
        <h1>Chirpr</h1>
        <SubmitChirp handleNewUser={this.handleNewUser} handleNewMessage={this.handleNewMessage} handleSubmit={this.handleSubmit} />
        <Timeline chirps={this.state.chirps} />
      </div>
    )
  }
}

 export default App