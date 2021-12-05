import React, { useEffect, useState } from "react";
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
  Explore,
  Search,
  EmailConfirmed,
  Change,
} from "./Containers";

import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import ScrollToTop from "./Components/ScrollToTop";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const [currUser, setUser] = useState(
    localStorage.getItem("nickname")
      ? window.localStorage.getItem("nickname")
      : null
  );

  const [userId, setUserId] = useState(
    localStorage.getItem("userId")
      ? window.localStorage.getItem("userId")
      : null
  );

  const [username, setUsername] = useState(
    localStorage.getItem("username")
      ? window.localStorage.getItem("username")
      : null
  );

  const saveUserData = (token, username, userId) => {
    setUsername(username);
    setToken(token);
    setUserId(userId);

    window.localStorage.setItem("token", token);

    window.localStorage.setItem("username", username);

    window.localStorage.setItem("userId", userId);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/accounts/user`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${token}`,
      },
    }).then((response) => {
      setUser(response.data.nickname);
      saveNickname(response.data.nickname);
    });
  }, [token]);

  const saveNickname = (nickname) => {
    window.localStorage.setItem("nickname", nickname);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    location.reload();
  };

  // search query function
  const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  let query = useQuery();

  return (
    <div>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar currUser={currUser} handleLogout={handleLogout} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Home currUser={currUser} token={token} userId={userId} />
          )}
        />
        <Route
          path="/mypage"
          exact
          render={() => (
            <MyPage currUser={currUser} token={token} userId={userId} />
          )}
        />
        <Route
          path="/detail/:id"
          exact
          render={() => (
            <Detail currUser={currUser} token={token} userId={userId} />
          )}
        />
        <Route
          path="/search"
          exact
          render={() => (
            <Search
              word={query.get("q")}
              currUser={currUser}
              token={token}
              userId={userId}
            />
          )}
        />
        <Route
          path="/new/:id"
          exact
          render={() => (
            <New currUser={currUser} token={token} userId={userId} />
          )}
        />
        <Route path="/new" exact render={() => <New token={token} />} />
        <Route
          path="/edit/:id"
          exact
          render={() => <Edit token={token} currUser={currUser} />}
        />
        <Route
          path="/explore"
          exact
          render={() => (
            <Explore currUser={currUser} token={token} userId={userId} />
          )}
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
              saveNickname={saveNickname}
            />
          )}
        />
        <Route
          path="/change"
          exact
          render={() => (
            <Change
              token={token}
              saveUserData={saveUserData}
              currUser={currUser}
              username={username}
            />
          )}
        />
        <Route
          path="/email-confirmed"
          exact
          render={() => (
            <EmailConfirmed
              token={token}
              saveUserData={saveUserData}
              currUser={currUser}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

const container = document.getElementById("app");
render(
  <Router>
    <App />
  </Router>,
  container
);
