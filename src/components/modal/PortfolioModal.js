import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import HomePortfolio from '../../blocks/home/HomePortfolio';
import PortfolioSlider from '../../blocks/portfolio/PortfolioSlider';


class MenuModal extends Component {
  constructor(context) {
    super(context);

    this.state = {
      showModal: false,
    };
  }

  open = () => {
    this.setState({ showModal: true });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  handleOnClick = (el) => {
    this.setState({ showModal: true, selected: el });
  }

  render() {
    return (
      <div>
        <HomePortfolio onExpandClick={this.handleOnClick}/>

        <Modal
          className="modal fade shift-modal"
          id="menu-modal"
          show={this.state.showModal}
          onHide={this.close}
          backdrop={false}
          aria-labelledby="menu-modal"
          aria-hidden="true"
          dialogClassName="modal-dialog modal-full wrapper"
          ref={(node) => (this.chart = node)}
        >
          <Modal.Header className="modal-header-top">
            <span
              title="Logo"
              className="logo logo-primary transform-scale-h"
            >
              <img src="assets/img/logo/logo-black-regular.svg" alt="Logo" />
            </span>

            <button
              onClick={this.close}
              type="button"
              className="close btn btn-link border-0 min-w-auto"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span className="adveits-i adv-close">
                <span></span>
                <span></span>
              </span>
            </button>
          </Modal.Header>

          <Modal.Body className="modal-body-centered">
            <div className="justify-content-center w-100" style={{display: 'block !important'}}>
              <div className="animated fadeindown">
              <PortfolioSlider selected={this.state.selected} />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default MenuModal;
