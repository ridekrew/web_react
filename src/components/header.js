import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-md-1 logo">
            <img src="../style/images/headerImages/KrewBetaLogo.png" />
          </div>
          <ul className="header-button-panel col-md-11">
            <li><a className="header-button">Learn</a></li>
            <li><a className="header-button">Join Us</a></li>
            <li><a className="header-button">Log In</a></li>
          </ul>
        </div>
      </header>
    );
  }
}
