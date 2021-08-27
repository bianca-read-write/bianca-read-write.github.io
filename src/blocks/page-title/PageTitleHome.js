import React from 'react';

const PageTitleHome = () => {
    return (
        <section id="page-title" className="block">
            <div className="wrapper">
                <div className="page-title-content">
                    <div className="page-title-img">
                        <img src="assets/img/demo/03_img.png" alt="Happy Anniversary" />
                    </div>

                    <div className="page-title-description">
                        <div className="title">
                            <h1 className="large">Happy<br/>Anniversary.</h1>
                        </div>

                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTitleHome;
