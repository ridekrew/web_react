import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origin: '',
            destination: '',
            date: ''
        }
    }

    updateOrigin = (e) => {
        this.setState({
            origin: e.target.value 
        });
    }

    updateDestination = (e) => {
        this.setState({
            destination: e.target.value
        });
    }

    updateDate = (e) => {
        this.setState({ 
            date: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="booking-header">
                    <h1>Experience a <span className="text-emphasis">Krew</span> Ride.</h1>
                </div>
                <div className="booking-form">
                    <input placeholder="Where should we pick you up?" value={this.state.origin} onChange={this.updateOrigin}></input>
                    <input placeholder="Where are you going?" value={this.state.destination} onChange={this.updateDestination}></input>
                    <input placeholder="What day?" value={this.state.date} onChange={this.updateDate}></input>
                    <Button className="booking-submit">Book!</Button>
                </div>
            </div>
        );
    }
}

export default BookingForm;