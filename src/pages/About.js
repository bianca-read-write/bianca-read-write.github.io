import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleAbout from "../blocks/page-title/PageTitleAbout";
import AboutContent from "../blocks/about/AboutContent";

const About = () => {
  document.body.classList.add("page");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Event | bianca & brian</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </MetaTags>

      <Loading />

      <Header />

      <main id="main" className="site-main">
        <PageTitleAbout />

        <div id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <div className="content">
              <div className="clearfix">
                <div id="contacts" className="block">
                  <div className="row gutter-width-md with-pb-sm">
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div className="contacts-item">
                        <div className="img object-fit">
                          <div className="object-fit-cover">
                            <img
                              src="assets/img/demo/05_img.png"
                              alt="Frond 1"
                            />
                          </div>
                        </div>

                        <div className="contacts-item-content">
                          <h3 className="contacts-item-title after">When</h3>
                          <p className="contacts-item-description">
                            Saturday, August 27, 2022
                            <br />
                            5:45 PM to 11:30 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div className="contacts-item">
                        <div className="img object-fit">
                          <div className="object-fit-cover">
                            <img
                              src="assets/img/demo/06_img.png"
                              alt="Frond 2"
                            />
                          </div>
                        </div>

                        <div className="contacts-item-content">
                          <h3 className="contacts-item-title after">Where</h3>
                          <p className="contacts-item-description">
                            <a href="https://goo.gl/maps/VmPPDJDCUp7AqDVZ8">
                              Celestine
                              <br />1 John St, Brooklyn, NY
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div className="contacts-item">
                        <div className="img object-fit">
                          <div className="object-fit-cover">
                            <img
                              src="assets/img/demo/07_img.png"
                              alt="Frond 3"
                            />
                          </div>
                        </div>

                        <div className="contacts-item-content">
                          <h3 className="contacts-item-title after">Attire</h3>
                          <p className="contacts-item-description">
                            Cocktail attire recommended
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <AboutContent />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default About;
