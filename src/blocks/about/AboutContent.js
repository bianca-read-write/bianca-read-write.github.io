import React from 'react';

const AboutContent = () => {
    return (
        <div id="about" className="block spacer p-top-xl">
            <div className="title">
                <h2>About me</h2>
            </div>

            <div className="row gutter-width-md with-pb-md">
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <h5>I’m a wedding, anniversary and honeymoon photographer.</h5>
                </div>

                <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
