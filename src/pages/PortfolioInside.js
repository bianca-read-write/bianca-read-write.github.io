import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitlePortfolioInside from '../blocks/page-title/PageTitlePortfolioInside';
import PortfolioProject from '../blocks/portfolio/PortfolioProject';
import PortfolioSlider from '../blocks/portfolio/PortfolioSlider';
import PortfolioPagination from '../blocks/portfolio/PortfolioPagination';

const PortfolioInside = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-portfolio' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Portfolio inside | Loversy - Wedding Photography React JS Template</title>

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
                <div id="page-content">
                    <div className="content">
                        <div id="single">
                            <div className="single-content">
                                <PageTitlePortfolioInside />

                                <PortfolioProject />

                                <PortfolioSlider />

                                <PortfolioPagination />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default PortfolioInside;
