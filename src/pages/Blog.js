import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleBlog from '../blocks/page-title/PageTitleBlog';
import BlogContent from '../blocks/blog/BlogContent';
import LoadMoreButton from '../components/loadmore/LoadMore';
import Widget from '../blocks/widget/Widget';

const Journal = () => {
    document.body.classList.add( 'blog' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Blog | Loversy - Wedding Photography React JS Template</title>

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
                <PageTitleBlog />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="blog">
                                <div className="row gutter-width-md">
                                    <div className="col-xl-8 col-lg-8 col-md-12">
                                        <BlogContent />
                                        
                                        <LoadMoreButton />
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-12">
                                        <Widget />
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

export default Journal;
