import React from 'react';

const AboutPortfolioLink = () => {
    return (
        <div id="portfolio" className="block spacer p-top-xl">
            <div className="text-center">
                <a title="My portfolio" className="btn btn-outline-primary text-uppercase" href={ process.env.PUBLIC_URL + "/portfolio" }>My portfolio</a>
            </div>
        </div>
    );
};

export default AboutPortfolioLink;
