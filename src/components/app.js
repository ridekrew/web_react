import React, { Component } from 'react';
import Header from './header';
import BookingForm from './bookingForm';
import InfoPanel from './infoPanel';
import EducationPanel from './educationPanel';

//const google = window.google;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            origin: '',
            destination: ''
        }
        this.updateOrigin = this.updateOrigin.bind(this);
        this.updateDestination = this.updateDestination.bind(this);
        this.validAddress = this.validAddress.bind(this);
    }

    updateOrigin(address) {
      this.setState({
          origin: address
      });
    }

    updateDestination(address) {
      this.setState({
          destination: address
      });
    }

    validAddress(address) {
      return false;
    }

    render() {
        return (
            <div>
                <Header />
                <div className="col-md-5">
                    <BookingForm
                      updateOrigin={this.updateOrigin}
                      origin={this.state.origin}
                      updateDestination={this.updateDestination}
                      destination={this.state.destination} />
                </div>
                <div className="col-md-7">
                    { this.validAddress(this.state.origin) ? <InfoPanel /> : <EducationPanel /> }
                </div>
          </div>
        );
    }

}
