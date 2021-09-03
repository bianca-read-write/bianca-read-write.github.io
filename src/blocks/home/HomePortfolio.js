import React from 'react';

import Gallery from '../gallery/Gallery';

const HomePortfolio = (props) => {
    return (
        <section id="porfolio" className="block spacer p-top-xl">
            <div className="wrapper">

                <div className="spacer p-top-lg">
                    <Gallery onExpandClick={props.onExpandClick}/>
                </div>
            </div>
        </section>
    );
};

export default HomePortfolio;
