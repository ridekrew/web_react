import React, { Component } from 'react';
import { Image, Row } from 'react-bootstrap';

import InfoPanelImage from './common/infoPanelImage';
import i from './common/infoPanelImage.scss'

export default class InfoPanel extends Component {
    render() {
        return (
            <div className={i.infoPanel}>
                <Row>
                    <h3 className={i.firstInfoHeader}>Going to a concert?</h3>
                </Row>
                <Row className={i.infoImagePanel}>
                    <InfoPanelImage img="../style/images/infoPanel/future.jpg" artist="Future" price={4.23}/>
                    <InfoPanelImage img="../style/images/infoPanel/kendrick-lamar.png" artist="Kendrick Lamar" price={11.00}/>
                    <InfoPanelImage img="../style/images/infoPanel/weeknd.jpg" artist="The Weeknd" price={22.58}/>
                    <InfoPanelImage img="../style/images/infoPanel/lil_wayne.jpg" artist="Lil' Wayne" price={11.49}/>
                </Row>
                <h3>Taking a flight?</h3>
                <Row className={i.infoImagePanel}>
                    <InfoPanelImage img="../style/images/infoPanel/future.jpg" artist="Future"/>
                    <InfoPanelImage img="../style/images/infoPanel/kendrick-lamar.png" artist="Kendrick Lamar"/>
                </Row>
                <h3>Weekend getaway?</h3>
                <Row className={i.infoImagePanel}>
                    <InfoPanelImage img="../style/images/infoPanel/austin.webp" artist="Austin, TX" price={32.50}/>
                    <InfoPanelImage img="../style/images/infoPanel/houston.jpg" artist="Houston, TX"/>
                </Row>
            </div>
        );
    }
}
