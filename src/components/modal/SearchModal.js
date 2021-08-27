import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class SearchModal extends Component {
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
            <div>
                <div className="search-toggle">
                    <button onClick={ this.open } type="button" className="btn btn-link btn-line p-0 border-0 min-w-auto text-uppercase" data-toggle="modal" data-target="#search-modal">Search</button>
                </div>

                <Modal className="modal fade"
                       id="search-modal"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       aria-labelledby="search-modal"
                       aria-hidden="true"
                       dialogClassName="modal-full wrapper"
                       ref={ node => this.chart = node }
                    >
                    <Modal.Header className="modal-header-top">
                        <button onClick={ this.close } type="button" className="close btn btn-link border-0 min-w-auto" data-dismiss="modal" aria-label="Close">
                            <span className="adveits-i adv-close">
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </Modal.Header>

                    <Modal.Body className="modal-body-centered">
                        <form className="search-form" role="search" method="get" action={ process.env.PUBLIC_URL + "/search-results" }>
                            <div className="search input-group">
                                <input className="form-control form-control-lg" type="text" placeholder="Search" name="s" />

                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-link border-0 p-0 min-w-auto">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    };
};

export default SearchModal;
