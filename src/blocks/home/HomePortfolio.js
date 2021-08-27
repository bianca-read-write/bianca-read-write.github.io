import React from 'react';

import Gallery from '../gallery/Gallery';

const HomePortfolio = () => {
    return (
        <section id="porfolio" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title">
                    <h2>My Portfolio</h2>
                </div>

                <div className="description max-width-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>

                <div className="spacer p-top-lg">
                    <Gallery />
                </div>
            </div>
        </section>
    );
};

export default HomePortfolio;
