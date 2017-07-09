import React, { Component } from 'react';
import { Row, Col, Grid, Button } from 'react-bootstrap';
import p from './price.scss';

export default class Price extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col md={6} className={p.priceColumn}>
                        <p className={p.price}>{"$" + (this.props.price / this.props.riders).toFixed(2)}</p>
                        <p className={p.priceSubtitle}>per person</p>
                    </Col>
                    <Col md={6}>
                        <p className={p.price} id={p.total}>{"$" + (parseFloat(this.props.price)).toFixed(2)}</p>
                        <p className={p.priceSubtitle} id={p.total}>total</p>
                    </Col>
                </Row>
                <Row>
                    <Button className={p.bookingButton}>View Available Bookings</Button>
                </Row>
            </Grid>
        );
    }
}
