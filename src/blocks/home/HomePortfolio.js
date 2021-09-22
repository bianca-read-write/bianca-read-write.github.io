import React from 'react';

import Gallery from '../gallery/Gallery';

const HomePortfolio = (props) => {
    return (
        <section id="porfolio" className="block spacer p-top-sm">
            <div className="wrapper">

                <div className="spacer p-top-sm">
                    <Gallery onExpandClick={props.onExpandClick}/>
                </div>
            </div>
        </section>
    );
};

export default HomePortfolio;
