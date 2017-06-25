import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';

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
            <div className="info-image-container">
                <img className="info-image" src={this.state.image}/>
                <p className="info-image-caption">{this.state.artist}</p>
                { this.state.price ? <p className="info-image-caption">Prices low as <span className="info-price">$</span><span className="info-price">{this.state.price}</span>!</p> : null }
            </div>
        );
    }
}