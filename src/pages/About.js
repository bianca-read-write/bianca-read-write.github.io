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
        <title>About | Loversy - Wedding Photography React JS Template</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
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
                              alt="Location"
                            />
                          </div>
                        </div>

                        <div className="contacts-item-content">
                          <h3 className="contacts-item-title after">When</h3>
                          <p className="contacts-item-description">
                            Saturday, August 27, 2022
                            <br />
                            6:00 PM to 11:30 PM
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
                              alt="Phone no."
                            />
                          </div>
                        </div>

                        <div className="contacts-item-content">
                          <h3 className="contacts-item-title after">Where</h3>
                          <p className="contacts-item-description"><a href="https://goo.gl/maps/VmPPDJDCUp7AqDVZ8">
                            Celestine
                            <br />1 John St, Brooklyn, NY 11201
                          </a></p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div className="contacts-item">
                        <div className="img object-fit">
                          <div className="object-fit-cover">
                            <img src="assets/img/demo/07_img.png" alt="Email" />
                          </div>
                        </div>

                        <div className="contacts-item-content">
                          <h3 className="contacts-item-title after">Dress</h3>
                          <p className="contacts-item-description">
                            Formal cocktail attire
                            <br />
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <AboutContent />

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
