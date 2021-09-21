import React from 'react';
import { withRouter } from 'react-router-dom';

const ModalMenuPrimary = ( props ) => {
    return (
        <nav className="menu-primary">
            <ul className="nav flex-column">
                <li className={ "nav-item " + ( props.location.pathname ===  window.location.pathname && props.location.pathname === process.env.PUBLIC_URL + "/"  ? "current-nav-item" : "" ) }>
                    <a title="Home" href={ process.env.PUBLIC_URL + "/" }>Home</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/event" ) ? "current-nav-item" : "" ) }>
                    <a title="The Event" href={ process.env.PUBLIC_URL + "/event" }>The Event</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/rsvp" ) ? "current-nav-item" : "" ) }>
                    <a title="RSVP" href={ process.env.PUBLIC_URL + "/rsvp" }>RSVP</a>
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