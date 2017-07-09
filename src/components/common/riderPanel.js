import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import FaUser from 'react-icons/lib/fa/user';
import FaUserPlus from 'react-icons/lib/fa/user-plus';
import r from './riderPanel.scss'

export default class RiderPanel extends Component {
    render() {
        return (
            <div>
                <FaUser id={r.firstRider} className={r.riders} />
                { this.props.riders >= 2 ? <FaUser className={r.riders} onClick={this.props.removeRider} /> : null }
                { this.props.riders >= 3 ? <FaUser className={r.riders} onClick={this.props.removeRider} /> : null }
                { this.props.riders >= 4 ? <FaUser className={r.riders} onClick={this.props.removeRider} /> : null }
                { this.props.riders >= 5 ? <FaUser className={r.riders} onClick={this.props.removeRider} /> : null }
                { this.props.riders == 6 ? <FaUser className={r.riders} onClick={this.props.removeRider} /> : null }
                { this.props.riders < 6 ? <FaUserPlus className={r.newRiders} onClick={this.props.addRider}/> : null }
                <Row className={r.riderText}>
                    { this.props.riders > 1 ? <div><span>{this.props.riders}</span><span> Riders</span></div> : null }
                    { this.props.riders == 1 ? <span>Solo Rider</span> : null }
                </Row>
            </div>
        );
    }
}
