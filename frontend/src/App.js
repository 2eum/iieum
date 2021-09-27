import React, { Component, useState } from "react";
import { render } from "react-dom";
import { Navbar, Home, Footer } from "./Containers";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import SignUp from "./Containers/SignUp/SignUp";
import Login from "./Containers/Login/Login";

const App = () => {
  const [token, setToken] = useState(
    "9e787f18c8487f3b34b200ad799dd30824712a5b"
  );
  const [currUser, setUser] = useState(null);

  const saveUserData = (token, user) => {
    setToken(token);
    setUser(user);
  };

  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar currUser={currUser} />
        <Switch>
          <Route path="/" exact component={Home} token={token} />
          <Route
            path="/register"
            exact
            render={() => (
              <SignUp
                token={token}
                saveUserData={saveUserData}
                currUser={currUser}
              />
            )}
          />
          <Route
            path="/login"
            exact
            render={() => (
              <Login
                token={token}
                saveUserData={saveUserData}
                currUser={currUser}
              />
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

const container = document.getElementById("app");
render(<App />, container);
