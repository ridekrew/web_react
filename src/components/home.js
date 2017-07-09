import React, { Component } from 'react';
import Header from './header';
import BookingForm from './bookingForm';
import InfoPanel from './infoPanel';
import EducationPanel from './educationPanel';
import { Link } from 'react-router';

const google = window.google;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origin: '',
            destination: ''
        }
    }

    updateOrigin = (address) => {
        this.setState({
            origin: address
        });
    }

    updateDestination = (address) => {
        this.setState({
            destination: address
        });
    }

    validAddress = (address) => {
        return false;
    }

    render() {
        return (
            <div>
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
