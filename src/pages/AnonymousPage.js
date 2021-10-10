import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import { LoginComponent } from "../blocks/auth/Login";

export const AnonymousPage = ({ onLogin }) => (
  <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Login | bianca & brian</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

    <main id="main" className="site-main">
      <section id="page-title" className="spacer p-top-xl">
        <div className="wrapper">
          <div className="title" style={{ textAlign: "center" }}>
            <h1 className="large">bianca & brian</h1>
          </div>
        </div>
      </section>

      <div id="page-content" className="spacer p-top-lg">
        <div className="wrapper">
          <div className="content">
            <div className="clearfix">
              <LoginComponent onLogin={onLogin} />
            </div>
          </div>
        </div>
      </div>
    </main>
  </Fragment>
);

export default AnonymousPage;
