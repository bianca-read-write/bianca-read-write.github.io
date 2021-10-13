import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import ModalMenuPrimary from "../../blocks/menu/MenuModalPrimary";

class MenuModal extends Component {
  constructor(context) {
    super(context);

    this.state = {
      showModal: false,
    };
  }

  open = () => {
    this.setState({ showModal: true });
    this.props.onOpenMenu && this.props.onOpenMenu();
  };

  close = () => {
    this.setState({ showModal: false });
    this.props.onCloseMenu && this.props.onCloseMenu();
  };

  render() {
    return (
      <div className="menu-toggle no-space">
        <button
          onClick={this.open}
          type="button"
          className="btn btn-link border-0 p-0 min-w-auto"
          data-toggle="modal"
          data-target="#menu-modal"
        >
          <span className="adveits-i adv-hamburger">
            <span></span>
            <span></span>
          </span>
        </button>

        <Modal
          className="modal fade shift-modal"
          id="menu-modal"
          show={this.state.showModal || this.props.showMenu}
          onHide={this.close}
          backdrop={false}
          aria-labelledby="menu-modal"
          aria-hidden="true"
          dialogClassName="modal-dialog modal-full wrapper"
          ref={(node) => (this.chart = node)}
        >
          <Modal.Header className="modal-header-top">
            <a
              title="Logo"
              className="logo logo-primary transform-scale-h"
              href={process.env.PUBLIC_URL + "/"}
            >
              <img src="assets/img/logo/logo-black-regular.svg" alt="Logo" />
            </a>

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
            <div className="d-flex justify-content-center w-100">
              <div className="animated fadeindown">
                <ModalMenuPrimary />

                <div className="search-toggle">
                  <button
                    onClick={() =>
                      window.postMessage({
                        action: "bb-request-logout",
                      })
                    }
                    type="button"
                    className="btn btn-link btn-line p-0 border-0 min-w-auto text-uppercase"
                    data-toggle="modal"
                    data-target="#search-modal"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default MenuModal;
