import React, { Component } from "react";
import { render } from "react-dom";
import { Navbar, Home, Footer } from "./Containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "./globalStyles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
    };
  }

  componentDidMount() {
    axios({
      method: "post",
      url: "/signup/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ff59ee976035b0ade661ea26b7a2ec277ee752c6",
      },
      data: {
        nickname: "wook10",
        password: "qwerty321",
      },
    })
      .then((response) => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.data;
      })
      .then((data) => {
        this.setState(() => {
          return {
            data,
            loaded: true,
          };
        });
      });
  }

  render() {
    return (
      <div>
        <Router>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </Router>
        <p>{this.state.data.User}</p>
        <p>{this.state.data.Token}</p>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
