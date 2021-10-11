import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleGifts from "../blocks/page-title/PageTitleGifts";

const About = () => {
  document.body.classList.add("page");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Gifts | bianca & brian</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      </MetaTags>

      <Loading />

      <Header />

      <main id="main" className="site-main page-gifts">
        <PageTitleGifts />

        <div id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <div className="content">
              <div className="clearfix">
                <div id="contacts" className="block">
                  <div className="row gutter-width-md with-pb-sm">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <div className="contacts-item">
                        <a
                          href="https://checkout.square.site/merchant/MLQ25XPXEB2CC/checkout/WSCEVFUK5FZT42AEJQ23H55O"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="img object-fit">
                            <div className="object-fit-cover">
                              <img
                                src="assets/img/demo/35_img.png"
                                alt="Frond 1"
                              />
                            </div>
                          </div>

                          <div className="contacts-item-content">
                            <h3 className="contacts-item-title after">
                              Honeymoon Fund
                            </h3>
                            <p className="contacts-item-description">
                              Bianca and Brian are planning a once-in-a-lifetime
                              trip to Asia. Help them embark on a memorable
                              adventure across Singapore, Thailand, Indonesia,
                              and beyond to discover new sights and people.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <div className="contacts-item">
                        <a
                          href="https://checkout.square.site/merchant/MLQ25XPXEB2CC/checkout/3UILYTTMB75FTB4BXJ6ZZQFF"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="img object-fit">
                            <div className="object-fit-cover">
                              <img
                                src="assets/img/demo/37_img.png"
                                alt="Phone no."
                              />
                            </div>
                          </div>

                          <div className="contacts-item-content">
                            <h3 className="contacts-item-title after">
                              First Home Fund
                            </h3>
                            <p className="contacts-item-description">
                              Bianca and Brian are currently renting an
                              apartment in Brooklyn with the hopes of purchasing
                              a home soon. Help them reach a big milestone that
                              will set the foundation for their future family.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
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
