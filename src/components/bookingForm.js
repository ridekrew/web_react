import React, { Component } from 'react';

class BookingForm extends Component {
    render() {
        return (
            <div className="container">
                <div className="booking-header">
                    <h1>Experience a <span className="text-emphasis">Krew</span> Ride.</h1>
                </div>
                <div className="booking-form">
                    <input placeholder="Where should we pick you up?"></input>
                    <input placeholder="Where are you going?"></input>
                    <input placeholder="What day?"></input>
                    <button className="booking-submit">Book!</button>
                </div>
            </div>
        );
    }
}

export default BookingForm;