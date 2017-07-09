import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import RiderPanel from './common/riderPanel';
import Price from './common/price';
import PlacesAutocomplete from 'react-places-autocomplete';
import Halogen from 'halogen';
import { Link } from 'react-router';
import request from 'superagent';

class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            riders: 1,
            price: 0,
            priceLoaded: true,
        }
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

    handleOrigin = (address) => {
        this.props.updateOrigin(address);
        this.calculatePrice(address, this.props.destination);
    }

    handleDestination = (address) => {
        this.props.updateDestination(address);
        this.calculatePrice(this.props.origin, address);
    }

    calculatePrice = (origin, destination) => {
        this.setState({
            priceLoaded: false
        });
        var price = 0;
        if (origin == '' || destination == '') {
            this.setState({
                priceLoaded: true
            });
            return price;
        } else {
            request
            .post('http://krew-dev-api.herokuapp.com/api/rides/price?key=test')
            .send({ origin: origin, destination: destination })
            .end((err, res) => {
                price = res.body.price.toFixed(2);
                this.setState({
                    priceLoaded: true,
                    price: price
                });
            });
        }
    }

    render() {
        const originInputProps = {
            value: this.props.origin,
            onChange: this.props.updateOrigin,
            placeholder: "Where should we pick you up?",
            autoFocus: true
        }

        const destinationInputProps = {
            value: this.props.destination,
            onChange: this.props.updateDestination,
            placeholder: "Where are you going?",
            autoFocus: true
        }

        const addressCSS = {
            root: 'addressRoot',
            input: 'addressInput',
            autocompleteContainer: 'addressContainer'
        }

        return (
            <div className="container">
                <div className="booking-header">
                    <h1>Experience a <span className="text-emphasis">Krew</span> Ride.</h1>
                </div>
                <div className="booking-form">
                    <PlacesAutocomplete
                        inputProps={originInputProps}
                        classNames={addressCSS}
                        onSelect={this.handleOrigin} />
                    <PlacesAutocomplete
                        inputProps={destinationInputProps}
                        classNames={addressCSS}
                        onSelect={this.handleDestination} />
                    <input placeholder="What day?" value={this.state.date} onChange={this.updateDate}></input>
                    <input placeholder="What time?" value={this.state.date} onChange={this.updateDate}></input>
                    <Row className="rider-panel">
                        <Col md={5}>
                            <h3 className="riders-header">How big is your Krew?</h3>
                            <RiderPanel addRider={this.addRider} removeRider={this.removeRider} riders={this.state.riders}/>
                        </Col>
                        <Col md={7}>
                            {this.state.priceLoaded ? <Price price={this.state.price} riders={this.state.riders}/> : <Halogen.ScaleLoader className="price-loader" color={'#f0a5a7'}/> }
                            <Row>
                                <Link to="confirmation">
                                    <Button className="booking-button">Book Ride</Button>
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default BookingForm;