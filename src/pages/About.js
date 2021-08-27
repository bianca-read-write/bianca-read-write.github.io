import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleAbout from '../blocks/page-title/PageTitleAbout';
import AboutContent from '../blocks/about/AboutContent';
import AboutServices from '../blocks/about/AboutServices';
import AboutPortfolioLink from '../blocks/about/AboutPortfolioLink';
import AboutClients from '../blocks/about/AboutClients';

const About = () => {
    document.body.classList.add( 'page' );

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
                                <div id="about-img" className="block">
                                    <div className="about-img">
                                        <div className="img object-fit">
                                            <div className="object-fit-cover">
                                                <img src="assets/img/placeholder/1600x700.jpg" alt="About" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <AboutContent />

                                <div id="services" className="block spacer p-top-xl">
                                    <div className="title">
                                        <h2>What I do?</h2>
                                    </div>

                                    <AboutServices />
                                </div>

                                <AboutPortfolioLink />

                                <AboutClients /> 
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
