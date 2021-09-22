import React, { Component } from "react";
import { render } from "react-dom";
import { Navbar, Home, Footer } from "./Containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

const App = () => {
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
      {/* <p>{this.state.data.User}</p>
        <p>{this.state.data.Token}</p> */}
    </div>
  );
};

export default App;

const container = document.getElementById("app");
render(<App />, container);
