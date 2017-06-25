import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import RiderPanel from './common/riderPanel';
import Price from './common/price';

class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origin: '',
            destination: '',
            date: '',
            riders: 1
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

    addRider = () => {
        this.setState({
            riders: this.state.riders += 1
        });
    }

    removeRider = () => {
        this.setState({
            riders: this.state.riders -= 1
        });
    }

    render() {
        return (
            <div className="container">
                <div className="booking-header">
                    <h1>Experience a <span className="text-emphasis">Krew</span> Ride.</h1>
                </div>
                <div className="booking-form">
                    <input placeholder="Where should we pick you up?" value={this.props.origin} onChange={this.props.updateOrigin}></input>
                    <input placeholder="Where are you going?" value={this.state.destination} onChange={this.updateDestination}></input>
                    <input placeholder="What day?" value={this.state.date} onChange={this.updateDate}></input>
                    <input placeholder="What time?" value={this.state.date} onChange={this.updateDate}></input>
                    <Row className="rider-panel">
                        <Col md={5}>
                            <h3 className="riders-header">How big is your Krew?</h3>
                            <RiderPanel addRider={this.addRider} removeRider = {this.removeRider} riders={this.state.riders}/>
                        </Col>
                        <Col md={7}>
                            <Price price={346.83} riders={this.state.riders}/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default BookingForm;