import React, { Component } from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';
import e from './educationPanel.scss';

export default class EducationPanel extends Component {
    render() {
        return (
            <Grid className={e.educationPanel}>
                <h1>Pre-Book a <span className={e.educationEmphasis}>Concert </span>Trip.</h1>
                <Row className={e.educationImageCarousel}>
                    <img src="../built/images/educationPanel/driver.jpg" />
                </Row>
                <h3>Enjoy Free Wi-Fi, Video/Music Streaming.</h3>
            </Grid>
        );
    }
}
