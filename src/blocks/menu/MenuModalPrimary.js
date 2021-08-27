import React from 'react';
import { withRouter } from 'react-router-dom';

const ModalMenuPrimary = ( props ) => {
    return (
        <nav className="menu-primary">
            <ul className="nav flex-column">
                <li className={ "nav-item " + ( props.location.pathname ===  window.location.pathname && props.location.pathname === process.env.PUBLIC_URL + "/"  ? "current-nav-item" : "" ) }>
                    <a title="Home" href={ process.env.PUBLIC_URL + "/" }>Home</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/about" ) ? "current-nav-item" : "" ) }>
                    <a title="About" href={ process.env.PUBLIC_URL + "/about" }>About</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/portfolio" ) ? "current-nav-item" : "" ) }>
                    <a title="Portfolio" href={ process.env.PUBLIC_URL + "/portfolio" }>Portfolio</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/blog" ) ? "current-nav-item" : "" ) }>
                    <a title="Blog" href={ process.env.PUBLIC_URL + "/blog" }>Blog</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/contacts" ) ? "current-nav-item" : "" ) }>
                    <a title="Contacts" href={ process.env.PUBLIC_URL + "/contacts" }>Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default withRouter(ModalMenuPrimary);