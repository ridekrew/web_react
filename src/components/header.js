import React, { Component } from 'react';
import { Row, Col, Grid, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showRegisterModal: false,
      loggedIn: false
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

  login = () => {
    this.setState({
      loggedIn: true
    });
  }

  logout = () => {
    this.setState({
      loggedIn: false
    });
  }

  render() {
    return (
      <div>
        <header className="container-fluid">
          <Row>
            <Col md={1} className="logo">
              <Link to="/"><img src="../style/images/headerImages/KrewBetaLogo.png" /></Link>
            </Col>
            <Col md={11}>
              <ul className="header-button-panel">
                <Link to="learn"><li><a className="header-button">Learn</a></li></Link>
                {!this.state.loggedIn ? <li><a className="header-button" onClick={this.openRegisterModal}>Join Us</a></li> : null}
                {!this.state.loggedIn ? <li><a className="header-button" onClick={this.openLoginModal}>Log In</a></li> : <Button onClick={this.logout}>Log Out</Button>}
              </ul>
            </Col>
          </Row>

          <Modal show={this.state.showLoginModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Login to Krew</Modal.Title>
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
        {this.props.children}
      </div>
    );
  }
}