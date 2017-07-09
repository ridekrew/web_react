import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import p from './infoPanelImage.scss';

export default class InfoPanelImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            artist: '',
            price: null
        }
    }

    componentDidMount() {
        this.setState({
            image: this.props.img,
            artist: this.props.artist,
            price: this.props.price
        });
    }

    render() {

        return(
            <div className={p.infoImageContainer}>
                <img className={p.infoImage} src={this.state.image}/>
                <p className={p.infoImageCaption}>{this.state.artist}</p>
                { this.state.price ? <p className={p.infoImageCaption}>Prices low as <span className={p.infoPrice}>$</span><span className={p.infoPrice}>{this.state.price}</span>!</p> : null }
            </div>
        );
    }
}
