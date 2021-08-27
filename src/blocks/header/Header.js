import React from 'react';

import HeaderLogo from '../logo/HeaderLogo';
import MenuModal from '../../components/modal/MenuModal';

const Header = () => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper">
                <div className="header-content d-flex justify-content-between">
                    <HeaderLogo />

                    <div className="header-menu">
                        <MenuModal />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
