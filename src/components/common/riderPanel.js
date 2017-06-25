import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import FaUser from 'react-icons/lib/fa/user';
import FaUserPlus from 'react-icons/lib/fa/user-plus';

export default class RiderPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riders: 1
        }
    }

    addRider = () => {
        this.setState({
            riders : this.state.riders += 1
        });
    }

    removeRider = () => {
        this.setState({
            riders: this.state.riders -= 1
        });
    }

    render() {
        return (
            <div>
                <FaUser className="riders" />
                { this.state.riders >= 2 ? <FaUser className="riders" onClick={this.removeRider} /> : null }
                { this.state.riders >= 3 ? <FaUser className="riders" onClick={this.removeRider} /> : null }
                { this.state.riders >= 4 ? <FaUser className="riders" onClick={this.removeRider} /> : null }
                { this.state.riders >= 5 ? <FaUser className="riders" onClick={this.removeRider} /> : null }
                { this.state.riders == 6 ? <FaUser className="riders" onClick={this.removeRider} /> : null }
                { this.state.riders < 6 ? <FaUserPlus className="new-riders" onClick={this.addRider}/> : null }
                <Row className="rider-text">
                    { this.state.riders > 1 ? <div><span>{this.state.riders}</span><span> Riders</span></div> : null }
                    { this.state.riders == 1 ? <span>Solo Rider</span> : null }
                </Row>
            </div>
        );
    }
}