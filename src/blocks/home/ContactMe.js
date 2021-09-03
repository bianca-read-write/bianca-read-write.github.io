import React from 'react';

const ContactMe = () => {
    return (
        <section id="contact-me" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="row gutter-width-md with-pb-md">
                    <div className="col-sm-8 col-md-8 col-lg-7 col-xl-7 align-self-center">
                        <div className="title">
                            <h2>Join us for a night of dinner, drinks, and dancing.</h2>
                        </div>

                        <div className="description max-width-1">
                            <p>Schedule for Saturday, August thae date. 6:00pm RT Ceremony (blah blah blah) 7:00pm ET Cocktail hour (blach blah blah) 8:000pm ET Dinner and Dancing (blah blah) Where Brooklun </p>
                        </div>

                        <div className="description max-width-1 spacer m-top-lg no-space">
                            <a className="btn btn-link btn-line p-0 border-0 min-w-auto text-uppercase before" href={ process.env.PUBLIC_URL + "/contacts" }>Contact me</a>
                        </div>
                    </div>

                    <div className="col-sm-4 col-md-4 col-lg-5 col-xl-5">
                        <div className="img-size-1">
                            <img src="assets/img/demo/04_img.png" alt="Contact Me" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
