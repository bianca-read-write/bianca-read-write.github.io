import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleBlogSingle from '../blocks/page-title/PageTitleBlogSingle';
import BlogMeta from '../blocks/blog/BlogMeta';
import BlogDescription from '../blocks/blog/BlogDescription';
import BlogTags from '../blocks/blog/BlogTags';
import BlogComments from '../blocks/blog/BlogComments';
import Widget from '../blocks/widget/Widget';

const BlogSinglePost = () => {
    document.body.classList.add( 'single-post' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Blog single post | Loversy - Wedding Photography React JS Template</title>

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
                <PageTitleBlogSingle />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div className="row gutter-width-md">
                                    <div className="col-xl-8 col-lg-8 col-md-12 single-content">
                                        <div className="img object-fit">
                                            <div className="object-fit-cover">
                                                <img src="assets/img/placeholder/1050x600.jpg" alt="Cozy USA elopement for adventurers" />
                                            </div>
                                        </div>

                                        <BlogMeta />

                                        <div className="title">
                                            <h2>Cozy USA elopement for adventurers</h2>
                                        </div>

                                        <BlogDescription />

                                        <BlogTags />

                                        <BlogComments />
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

export default BlogSinglePost;
