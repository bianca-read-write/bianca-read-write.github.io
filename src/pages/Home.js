import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleHome from '../blocks/page-title/PageTitleHome';
import AboutServices from '../blocks/about/AboutServices';
import HomePortfolio from '../blocks/home/HomePortfolio';
import ContactMe from '../blocks/home/ContactMe';
import HomeBlog from '../blocks/home/HomeBlog';
import ContactMe2 from '../blocks/contacts/ContactMe2';


const Home = () => {
    document.body.classList.add( 'home' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | Loversy - Wedding Photography React JS Template</title>

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
                <div className="content">
                    <div className="clearfix">
                        <PageTitleHome />

                        <div id="services" className="block spacer p-top-xl">
                            <div className="wrapper">
                                <div className="title">
                                    <h2>What I do?</h2>
                                </div>

                                <AboutServices />
                            </div>
                        </div>

                        <HomePortfolio />

                        <ContactMe />
                        
                        <HomeBlog />

                        <section id="contact-me-2" className="block spacer p-top-xl">
                            <div className="wrapper">
                                <ContactMe2 />
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Home;
