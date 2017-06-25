import React, { Component } from 'react';
import Header from './header';
import BookingForm from './bookingForm';
import InfoPanel from './infoPanel';
import EducationPanel from './educationPanel';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origin: ''
        }
    }

    updateOrigin = (e) => {
        this.setState({
            origin: e.target.value 
        });
    }

    validAddress = (address) => {
      if (address == "Dallas, TX") {
        return true;
      }
      return false;
    }

    render() {
        return (
            <div>
                <Header />
                <div className="col-md-5">
                    <BookingForm updateOrigin={this.updateOrigin} origin={this.state.origin}/>
                </div>
                <div className="col-md-7">
                    { this.validAddress(this.state.origin) ? <InfoPanel /> : <EducationPanel /> }
                </div>
          </div>
        );
    }
}
