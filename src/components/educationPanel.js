import React, { Component } from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';

export default class EducationPanel extends Component {
    render() {
        return (
            <Grid className="education-panel">
                <h1>Pre-Book a <span className="education-emphasis">Concert </span>Trip.</h1>
                <Row className="education-image-carousel">
                    <img src="../style/images/educationPanel/driver.jpg" />
                </Row>
                <h3>Enjoy Free Wi-Fi, Video/Music Streaming.</h3>
            </Grid>
        );
    }
}