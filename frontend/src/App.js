import React, { Component, useState } from "react";
import { render } from "react-dom";
import {
  Navbar,
  Home,
  Footer,
  SignUp,
  Login,
  MyPage,
  New,
  Detail,
} from "./Containers";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token")).token
      : ""
  );
  const [currUser, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(window.localStorage.getItem("user")).user
      : ""
  );

  const saveUserData = (token, user) => {
    setToken(token);
    setUser(user);

    const tokenObj = { token: token };
    window.localStorage.setItem("token", JSON.stringify(tokenObj));

    const userObj = { user: user };
    window.localStorage.setItem("user", JSON.stringify(userObj));
  };

  const handleLogout = () => {
    window.localStorage.clear();
    location.reload();
  };

  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar currUser={currUser} handleLogout={handleLogout} />
        <Switch>
          <Route path="/" exact render={() => <Home token={token} />} />
          <Route path="/mypage" exact render={() => <MyPage token={token} />} />
          <Route path="/detail/:id" exact render={() => <Detail />} />
          <Route path="/detail/" exact render={() => <h2>잘못된 접근</h2>} />
          <Route path="/new" exact render={() => <New token={token} />} />
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
