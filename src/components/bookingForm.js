import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import RiderPanel from './common/riderPanel';
import Price from './common/price';
import PlacesAutocomplete from 'react-places-autocomplete';

class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            riders: 1,
            price: 0,
            priceLoaded: true
        }
        this.updateDate = this.updateDate.bind(this);
        this.addRider = this.addRider.bind(this);
        this.removeRider = this.removeRider.bind(this);
        this.handleOrigin = this.handleOrigin.bind(this);
        this.handleDestination = this.handleDestination.bind(this);
        this.calculatePrice = this.calculatePrice.bind(this);
    }

    updateDate(e) {
      this.setState({
          date: e.target.value
      });
    }

    addRider() {
        this.setState({
            riders: this.state.riders += 1
        });
    }

    removeRider() {
        this.setState({
            riders: this.state.riders -= 1
        });
    }

    handleOrigin(address) {
        this.props.updateOrigin(address);
        this.calculatePrice(address, this.props.destination);
    }

    handleDestination(address) {
        this.props.updateDestination(address);
        this.calculatePrice(this.props.origin, address);
    }

    calculatePrice(origin, destination) {
        this.setState({
            priceLoaded: false
        });
        var origin = [origin];
        var destination = [destination];
        var distanceMatrix = new google.maps.DistanceMatrixService();
		    var distanceRequest = { origins: origin, destinations: destination, travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.IMPERIAL, avoidHighways: false, avoidTolls: false };
        var price = 0;
        if (origin == '' || destination == '') {
            this.setState({
                priceLoaded: true
            });
            return price;
        } else {
            distanceMatrix.getDistanceMatrix(distanceRequest, (response, status) => {
                if (status !== google.maps.DistanceMatrixStatus.OK) {
                    console.log("There was an error.");
                } else {
                    console.log(response);
                    var responseFields = response.rows[0].elements[0];
                    var distance = responseFields.distance.value / 1609.344; // Convert meters to miles for use in pricing model
                    var duration = responseFields.duration.value / 60.0; // Convert seconds to minutes
                    console.log("Distance", distance, "Duration", duration);
                    if (distance <= 100) {
                        price = ((0.5 * duration + 0.2 * distance) * 1.4) + 1.5
                    } else if (distance <= 200) {
                        price = ((0.44 * duration + 0.18 * distance) * 1.325) + 1.5
                    } else {
                        price = ((0.4166 * duration + 0.16 * distance) * 1.25) + 1.5
                    }
                }
                this.setState({
                    price: price,
                    priceLoaded: true
                });
                return this.state.price;
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
                            <RiderPanel addRider={this.addRider} removeRider = {this.removeRider} riders={this.state.riders}/>
                        </Col>
                        <Col md={7}>
                            {this.state.priceLoaded ? <Price price={this.state.price} riders={this.state.riders}/> : null }
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default BookingForm;
