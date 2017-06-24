import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showRegisterModal: false
    };
  }

  openLoginModal = () => {
    this.setState({
      showLoginModal: true,
      showRegisterModal: false
    });
  }

  openRegisterModal = () => {
    this.setState({
      showRegisterModal: true,
      showLoginModal: false
    });
  }

  closeModal = () => {
    this.setState({
      showLoginModal: false,
      showRegisterModal: false 
    });
  }

  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-md-1 logo">
            <img src="../style/images/headerImages/KrewBetaLogo.png" />
          </div>
          <ul className="header-button-panel col-md-11">
            <li><a className="header-button">Learn</a></li>
            <li><a className="header-button" onClick={this.openRegisterModal}>Join Us</a></li>
            <li><a className="header-button" onClick={this.openLoginModal}>Log In</a></li>
          </ul>
        </div>

        <Modal show={this.state.showLoginModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login to Krew Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This is the login modal text.
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showRegisterModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create a New Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This is the registration modal text.
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </header>
    );
  }
}