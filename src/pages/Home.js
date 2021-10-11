import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { useHistory } from "react-router-dom";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleHome from "../blocks/page-title/PageTitleHome";
import PortfolioModal from "../components/modal/PortfolioModal";

const Home = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  document.body.classList.add("home");

  const handleLearnMoreClick = () => {
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  const handleMenuOpen = () => {
    setShowMenu(true);
  };

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Home | bianca & brian</title>

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

      <Header
        showMenu={showMenu}
        onOpenMenu={handleMenuOpen}
        onCloseMenu={handleMenuClose}
        showLogo={false}
      />

      <main id="main" className="site-main">
        <div className="content">
          <div className="clearfix">
            <PageTitleHome />

            <div className="row gutter-width-md with-pb-sm spacer p-top-lg">
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 align-right">
                <button
                  type="submit"
                  className="btn btn-outline-primary text-uppercase"
                  style={{ minHeight: "70px", marginTop: "1rem" }}
                  onClick={() => history.push("/rsvp")}
                >
                  RSVP
                </button>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 align-left">
                <button
                  type="submit"
                  className="btn btn-outline-primary text-uppercase"
                  style={{ minHeight: "70px", marginTop: "1rem" }}
                  onClick={handleLearnMoreClick}
                >
                  READ MORE
                </button>
              </div>
            </div>

            <PortfolioModal />

          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
