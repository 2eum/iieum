import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import {
  Navbar,
  Home,
  Footer,
  SignUp,
  Login,
  MyPage,
  New,
  Explore,
  Search,
  EmailConfirmed,
  Change,
} from './Containers';

import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import GlobalStyle, { BodyContainer } from './styles/globalStyles';
import ScrollToTop from './Components/ScrollToTop';
import axios from 'axios';
import CustomAlert from './Components/CustomAlert/CustomAlert';
import ResponsivePlaceholder from './Components/ResponsivePlaceholder';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [token, setToken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : null,
  );
  const [currUser, setUser] = useState(
    localStorage.getItem('nickname')
      ? window.localStorage.getItem('nickname')
      : null,
  );

  const [userId, setUserId] = useState(
    localStorage.getItem('userId')
      ? window.localStorage.getItem('userId')
      : null,
  );

  const [username, setUsername] = useState(
    localStorage.getItem('username')
      ? window.localStorage.getItem('username')
      : null,
  );

  // alert modal states
  const [scroll, setScroll] = useState(0);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // scroll, size event listener add on load, remove on unload
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('scroll', trackScroll);
    window.addEventListener('resize', (e) =>
      setWindowWidth(e.target.innerWidth),
    );
    return () => {
      window.removeEventListener('scroll', trackScroll);
      window.removeEventListener('resize', setWindowWidth);
    };
  }, []);

  const trackScroll = (e) => {
    setScroll(e.srcElement.scrollingElement.scrollTop);
  };

  const saveUserData = (token, username, userId) => {
    setUsername(username);
    setToken(token);
    setUserId(userId);

    window.localStorage.setItem('token', token);

    window.localStorage.setItem('username', username);

    window.localStorage.setItem('userId', userId);
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: `/api/accounts/user`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `jwt ${token}`,
      },
    }).then((response) => {
      setUser(response.data.nickname);
      saveNickname(response.data.nickname);
    });
  }, [token]);

  const saveNickname = (nickname) => {
    window.localStorage.setItem('nickname', nickname);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    location.reload();
  };

  // open alert
  const handleAlert = (message) => {
    setAlertOpen(alertOpen ? false : true);
    setAlertMessage(alertMessage ? '' : message);
  };

  // search query function
  const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  let query = useQuery();

  return (
    <>
      <ScrollToTop />
      <GlobalStyle alertOpen={alertOpen} />
      {windowWidth >= 1280 ? (
        <>
          <Navbar
            currUser={currUser}
            handleLogout={handleLogout}
            handleAlert={handleAlert}
          />
          {alertOpen ? (
            <CustomAlert
              scroll={scroll}
              alertOpen={alertOpen}
              handleAlert={handleAlert}
              alertMessage={alertMessage}
            />
          ) : (
            ''
          )}

          <BodyContainer>
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <Home
                    currUser={currUser}
                    token={token}
                    userId={userId}
                    handleAlert={handleAlert}
                  />
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
                path="/search"
                exact
                render={() => (
                  <Search
                    word={query.get('q')}
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
                path="/explore"
                exact
                render={() => (
                  <Explore currUser={currUser} token={token} userId={userId} />
                )}
              />
              <Route
                path="/sign-up"
                exact
                render={() => (
                  <SignUp
                    token={token}
                    saveUserData={saveUserData}
                    currUser={currUser}
                    handleAlert={handleAlert}
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
            </Switch>
          </BodyContainer>
          <Footer />
        </>
      ) : (
        <ResponsivePlaceholder />
      )}
    </>
  );
};

export default App;

const container = document.getElementById('app');
render(
  <Router>
    <App />
  </Router>,
  container,
);
