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

  return (
    <>
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
              path={`${process.env.PUBLIC_URL + "/about"}`}
              component={About}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL + "/about"}`}
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
              path={`${process.env.PUBLIC_URL + "/portfolio"}`}
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
    </>
  );
}

export default App;