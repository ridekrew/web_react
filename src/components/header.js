import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-md-8 logo">
            <img src="../style/images/headerImages/KrewBetaLogo.png" />
          </div>
          <div className="col-md-1 learnmorebutton">
            <button>Learn</button>
          </div>
          <div className="col-md-1 joinbutton">
            <button>Join Us</button>
          </div>
          <div className="col-md-1 loginbutton">
            <button>Log In</button>
          </div>
        </div>
      </header>
    );
  }
}
