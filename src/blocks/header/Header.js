import React from "react";

import HeaderLogo from "../logo/HeaderLogo";
import MenuModal from "../../components/modal/MenuModal";

const Header = ({ showMenu, onMenuOpen, onCloseMenu, showLogo = true }) => {
  return (
    <header id="header" className="site-header">
      <div className="wrapper">
        <div className="header-content d-flex justify-content-between">
          {(showLogo && <HeaderLogo />) || <span></span>}
          <div className="header-menu">
            <MenuModal
              showMenu={showMenu}
              onMenuOpen={onMenuOpen}
              onCloseMenu={onCloseMenu}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
