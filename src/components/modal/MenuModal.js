import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import SearchModal from './SearchModal';

import ModalMenuPrimary from '../../blocks/menu/MenuModalPrimary';

class MenuModal extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };
    };

    open = () => {
        this.setState( { showModal: true } );
    };

    close = () => {
        this.setState( { showModal: false } );
    };

    render() {
        return (
            <div className="menu-toggle no-space">
                <button onClick={ this.open } type="button" className="btn btn-link border-0 p-0 min-w-auto" data-toggle="modal" data-target="#menu-modal">
                    <span className="adveits-i adv-hamburger">
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <Modal 
                    className="modal fade shift-modal"
                    id="menu-modal"
                    show={ this.state.showModal }
                    onHide={ this.close }
                    backdrop={ false }
                    aria-labelledby="menu-modal"
                    aria-hidden="true"
                    dialogClassName="modal-dialog modal-full wrapper"
                    ref={ node => this.chart = node }
                >
                    <Modal.Header className="modal-header-top">
                        <a title="Logo" className="logo logo-primary transform-scale-h" href={ process.env.PUBLIC_URL + "/" }>
                            <img src="assets/img/logo/logo.svg" alt="Logo" />
                        </a>

                        <button onClick={ this.close } type="button" className="close btn btn-link border-0 min-w-auto" data-dismiss="modal" aria-label="Close">
                            <span className="adveits-i adv-close">
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </Modal.Header>

                    <Modal.Body className="modal-body-centered">
                        <div className="d-flex justify-content-center w-100">
                            <div className="menu-img">
                                <img src="assets/img/menu/menu-img.png" alt="Menu" />
                            </div>

                            <div className="animated fadeindown">
                                <ModalMenuPrimary />

                                <SearchModal />
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    };
};

export default MenuModal;
