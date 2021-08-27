import React from 'react';

const HeaderUI = () => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper">
                <div className="header-content d-flex justify-content-between">
                    <div className="header-logo">
                        <a className="logo logo-primary transform-scale-h" title="Logo" href={ process.env.PUBLIC_URL + "/" }>
                            <img src="assets/img/logo/logo.svg" alt="Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderUI;
