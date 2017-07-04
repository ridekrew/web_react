import React, { Component } from 'react';
import { Row, Col, Grid, Button } from 'react-bootstrap';

export default class Price extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col md={6} className="price-column">
                        <p className="price">{"$" + (this.props.price / this.props.riders).toFixed(2)}</p>
                        <p className="price-subtitle">per person</p>
                    </Col>
                    <Col md={6}>
                        <p className="price" id="total">{"$" + (parseFloat(this.props.price)).toFixed(2)}</p>
                        <p className="price-subtitle" id="total">total</p>
                    </Col>
                </Row>
                {/*<Row>
                    <Button className="booking-button">View Available Bookings</Button>
                </Row>*/}
            </Grid>
        );
    }
}