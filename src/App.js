import React, { Component } from "react";
import axios from "axios";
 
import "./App.css";

import Header from "./Components/Header/Header";
import Posts from "./Components/Posts/Posts";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: "",
      currentUser: {}
    };
  }

  handleUserInput = (userName) => {
    this.setState({ userName });
  };

  handlePassInput = (password) => {
    this.setState({ password });
  };

  loginUser = () => {
    const { userName, password } = this.state;
    axios.post(`http://localhost:3001/api/users/${userName}`, { password })
    .then(res => this.setState({ currentUser: res.data }))
    .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header
          userFn={this.handleUserInput}
          passFn={this.handlePassInput}
          loginFn={this.loginUser}
          user={this.state.currentUser}
        />
        <h1 className="page-title">Share your thoughts...</h1>
        <Posts user={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
