import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Gifts from "./pages/Gifts";
import Portfolio from "./pages/Portfolio";
import page404 from "./pages/404";
import AnonymousPage from "./pages/AnonymousPage";
import TravelPage from "./pages/Travel";
import { Auth } from "./api/auth";
import UserContext from "./contexts/UserContext";

function App() {
  const [login, setLogin] = useState({});

  const handleLogin = (login) => {
    setLogin(login);
  };

  const handleLogout = () => {
    setLogin({});
  };

  window.onmessage = ({ data: { action } }) => {
    if (action === "bb-request-logout") {
      new Auth().delete();
      handleLogout();
    }
  };

  if (login.valid) {
    if (window.location.hostname !== "localhost") {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        user_id: `${login.code}-${login.name}`,
      });

      window.gtag("set", "user_properties", {
        name: login.name,
        code: login.code,
      });
    }
  }

  return (
    <>
      <UserContext.Provider value={login}>
        {login.valid ? (
          <Router>
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/"}`}
                component={Home}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/event"}`}
                component={About}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/gifts"}`}
                component={Gifts}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/travel"}`}
                component={TravelPage}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/rsvp"}`}
                component={Portfolio}
              />
              <Route exact component={page404} />
            </Switch>
          </Router>
        ) : (
          <AnonymousPage onLogin={handleLogin} />
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
