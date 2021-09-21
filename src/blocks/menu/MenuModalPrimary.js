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
                    <a title="Event" href={ process.env.PUBLIC_URL + "/event" }>Event</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/travel" ) ? "current-nav-item" : "" ) }>
                    <a title="Travel" href={ process.env.PUBLIC_URL + "/travel" }>Travel</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/rsvp" ) ? "current-nav-item" : "" ) }>
                    <a title="RSVP" href={ process.env.PUBLIC_URL + "/rsvp" }>RSVP</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/gifts" ) ? "current-nav-item" : "" ) }>
                    <a title="Gifts" href={ process.env.PUBLIC_URL + "/gifts" }>Gifts</a>
                </li>
            </ul>
        </nav>
    );
};

export default withRouter(ModalMenuPrimary);