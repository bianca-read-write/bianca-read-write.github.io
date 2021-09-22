import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitle404 from "../blocks/page-title/PageTitle404";
import BackToHome from "../components/button/BackToHome";

const page404 = () => {
  document.body.classList.add("error404");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>404 | bianca & brian</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header />

      <main id="main" className="site-main">
        <div id="page-content">
          <div className="wrapper">
            <div className="content">
              <div className="row gutter-width-md">
                <div className="col-11 col-sm-10 col-md-9 col-lg-6 col-xl-6">
                  <PageTitle404 />

                  <p className="text after">
                    The page you were looking for couldn't be found.
                  </p>

                  <BackToHome />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default page404;
