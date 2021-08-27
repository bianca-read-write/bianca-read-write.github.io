import React from 'react';

const PageTitleBlog = () => {
    return (
        <section id="page-title">
            <div className="wrapper">
                <div className="title">
                    <h1 className="large">Blog.</h1>
                </div>

                <div className="spacer m-top-md">
                    <div className="row gutter-width-md">
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href={ process.env.PUBLIC_URL + "/" }>Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                </ol>
                            </nav>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <div className="description-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTitleBlog;
