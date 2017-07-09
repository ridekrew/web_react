import React, { Component } from 'react';
import Header from './header';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Elements } from 'react-stripe-elements';
import Price from './common/price';
import CheckoutForm from './common/checkoutForm';

export default class Confirmation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="confirmation-header">
                        <Col md={12}>
                            <h1>Your Krew Ride</h1>
                        </Col>
                    </Row>
                    <Row className="confirmation-summary">
                        <Col md={4}>
                            <h3>Pick Up</h3>
                            <p>2949 Parkwood Blvd.</p>
                            <p>Frisco, TX 75034</p>
                            <br />
                            <br />
                            <br />
                            <h3>Pick Up Date</h3>
                            <p>July 7, 2017</p>
                        </Col>
                        <Col md={4}>
                            <h3>Destination</h3>
                            <p>3108 Centerville Rd.</p>
                            <p>Wilmington, DE 19807</p>
                            <br />
                            <br />
                            <br />
                            <h3>Pick Up Time</h3>
                            <p>3:35 PM</p>
                        </Col>
                        <Col md={4}>
                            <h3>Krew Info</h3>
                            <p>2 Riders</p>
                            <p>(302) 740-4247</p>
                            <br />
                            <br />
                            <br />
                            <h3>Arrival Time</h3>
                            <p>6:45 PM</p>
                        </Col>
                    </Row>
                    <Row className="confirmation-payment">
                        <Col md={4}>
                            <h2>Cost</h2>
                            <Price price={48.49} riders={2} />
                        </Col>
                        <Col md={4}>
                            <h2>Payment Method</h2>
                            <Elements>
                                <CheckoutForm />
                            </Elements>
                        </Col>
                        <Col md={4}>
                            <Button id="confirmation-book-button">Book Ride</Button>
                        </Col>
                    </Row>
                    <Row className="confirmation-disclaimer">
                        <Col md={12}>
                            <p>Krew is not liable for any legal action at any time, seriously don't even try it. By booking this ride, you are agreeing to all Krew terms and conditions.
                                This is absolutely legally binding and there is absolutely nothing you can do to gain any money from Krew, LLC.Krew is not liable for any legal action at any time, seriously don't even try it. By booking this ride, you are agreeing to all Krew terms and conditions.
                                This is absolutely legally binding and there is absolutely nothing you can do to gain any money from Krew, LLC.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}