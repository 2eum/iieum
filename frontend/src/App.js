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
  Edit,
} from "./Containers";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [currUser, setUser] = useState(
    localStorage.getItem("nickname")
      ? window.localStorage.getItem("nickname")
      : ""
  );

  const [userId, setUserId] = useState(
    localStorage.getItem("userId") ? window.localStorage.getItem("userId") : ""
  );

  const saveUserData = (token, nickname, userId) => {
    setToken(token);
    setUser(nickname);
    setUserId(userId);

    window.localStorage.setItem("token", token);

    window.localStorage.setItem("nickname", nickname);

    window.localStorage.setItem("userId", userId);
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
          <Route
            path="/detail/:id"
            exact
            render={() => (
              <Detail currUser={currUser} token={token} userId={userId} />
            )}
          />
          <Route path="/detail/" exact render={() => <h2>잘못된 접근</h2>} />
          <Route path="/new/:id" exact render={() => <New token={token} />} />
          <Route path="/new" exact render={() => <New token={token} />} />
          <Route
            path="/edit/:id"
            exact
            render={() => <Edit token={token} currUser={currUser} />}
          />
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
