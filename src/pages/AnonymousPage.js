import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import { LoginComponent } from "../blocks/auth/Login";

export const AnonymousPage = ({ onLogin }) => (
  <Fragment>
    <MetaTags>
      <meta charSet="UTF-8" />
      <title>404 | Loversy - Wedding Photography React JS Template</title>

      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="robots" content="index, follow, noodp" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      <meta name="format-detection" content="telephone=no" />
    </MetaTags>

    <main id="main" className="site-main">
      <section id="page-title">
        <div className="wrapper">
          <div className="title" style={{ textAlign: "center" }}>
            <h1 className="large">bianca & brian</h1>
          </div>
        </div>
      </section>

      <div id="page-content" className="spacer p-top-xl">
        <div className="wrapper">
          <div className="content">
            <div id="blog">
              <div className="row gutter-width-md">
                <div className="col-xl-8 col-lg-8 col-md-12">
                  <LoginComponent onLogin={onLogin} />
                </div>

                <div className="col-xl-4 col-lg-4 col-md-12">
                  <div class="login-page-image-wrapper">
                    <img
                      src="assets/img/demo/03_img.png"
                      alt="Happy Anniversary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="page-content" className="spacer p-top-lg">
        <div className="wrapper">
          <div className="content">
            <div className="clearfix">
              <LoginComponent onLogin={onLogin} />
            </div>
          </div>
        </div>
      </div> */}
    </main>
  </Fragment>
);

export default AnonymousPage;
