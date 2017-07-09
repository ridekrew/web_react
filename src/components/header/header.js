import React, { Component } from 'react';
import { Row, Col, Grid, Modal, Button } from 'react-bootstrap';
import h from './header.scss';
import '../bookingForm/bookingForm.scss';
import '../common/price.scss';
import '../common/riderPanel.scss';
import '../common/infoPanelImage.scss';
import '../educationPanel/educationPanel.scss';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showRegisterModal: false,
      loggedIn: false
    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openRegisterModal = this.openRegisterModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

  }

  openLoginModal() {
    this.setState({
      showLoginModal: true,
      showRegisterModal: false
    });
  }

  openRegisterModal() {
    this.setState({
      showRegisterModal: true,
      showLoginModal: false
    });
  }

  closeModal() {
    this.setState({
      showLoginModal: false,
      showRegisterModal: false
    });
  }

  login() {
    this.setState({
      loggedIn: true
    });
  }

  logout() {
    this.setState({
      loggedIn: false
    });
  }

  render() {

    return (
      <header className="container-fluid">
        <Row>
          <Col md={1} className={h.logo}>
            <img src="../built/images/headerImages/KrewBetaLogo.png" />
          </Col>
          <Col md={11}>
            <ul className={h.headerButtonPanel}>
              <li><a className={h.headerButton}>Learn</a></li>
              { !this.state.loggedIn ? <li><a className={h.headerButton} onClick={this.openRegisterModal}>Join Us</a></li> : null }
              { !this.state.loggedIn ? <li><a className={h.headerButton} onClick={this.openLoginModal}>Log In</a></li> : <Button onClick={this.logout}>Log Out</Button> }
            </ul>
          </Col>
        </Row>

        <Modal show={this.state.showLoginModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h2>Login to Krew</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This is the login modal text.
            <Button onClick={this.login}>Log In</Button>
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