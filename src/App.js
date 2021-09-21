import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import BlogSinglePost from "./pages/BlogSinglePost";
import SearchResults from "./pages/SearchResults";
import Portfolio from "./pages/Portfolio";
import PortfolioInside from "./pages/PortfolioInside";
import page404 from "./pages/404";
import UserInterface from "./pages/UserInterface";
import AnonymousPage from "./pages/AnonymousPage";
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
                path={`${process.env.PUBLIC_URL + "/contacts"}`}
                component={Contacts}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/blog"}`}
                component={Blog}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/blog-single-post"}`}
                component={BlogSinglePost}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/search-results"}`}
                component={SearchResults}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/rsvp"}`}
                component={Portfolio}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/ui"}`}
                component={UserInterface}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/portfolio-inside"}`}
                component={PortfolioInside}
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
