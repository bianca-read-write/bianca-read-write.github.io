import React from 'react';

const PageTitleHome = () => {
    return (
        <section id="page-title" className="block">
            <div className="wrapper">
                <div className="page-title-content">
                    <div className="page-title-img">
                        <img src="assets/img/demo/bridge.png" alt="Happy Anniversary" />
                    </div>

                    <div className="page-title-description">
                        <div className="title">
                            <h1 className="large">Celebrate<br/>Our wedding</h1>
                        </div>

                        <div className="description">
                            <p>Join Bianca, Brian, and their families for a magical night in Brooklyn celebrating their marriage. Enjoy a sunset cocktail hour on the Brooklyn waterfront, a full mediterrnaean dinner, and dance the night away. Formal cocktail attire.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTitleHome;
