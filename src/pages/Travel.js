import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleTravel from "../blocks/page-title/PageTitleTravel";
import AboutContent from "../blocks/about/AboutContent";
import AboutServices from "../blocks/about/AboutServices";
import AboutPortfolioLink from "../blocks/about/AboutPortfolioLink";
import AboutClients from "../blocks/about/AboutClients";
import TravelContent from "../blocks/travel/TravelContent";

const Travel = () => {
  document.body.classList.add("page");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Travel | bianca & brian</title>

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
        <PageTitleTravel />


        <div id="page-content">
          <div className="wrapper">
            <div className="content">
              <div className="clearfix">
              <div id="about-img" className="block spacer p-top-lg">
                  <div className="about-img">
                    <iframe
                      title="Celestine Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12098.426283248018!2d-73.99672423206884!3d40.70466167933276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a323080c221%3A0x55426c89c4a6a6a3!2sCelestine!5e0!3m2!1sen!2sus!4v1632185265422!5m2!1sen!2sus"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>{" "}
                  </div>
                </div>
                <TravelContent />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Travel;
