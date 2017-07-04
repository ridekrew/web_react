import React, { Component } from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { Button } from 'react-bootstrap';


class CheckoutForm extends Component {

    processPayment = (ev) => {
        ev.preventDefault();

        this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
            console.log('Received Stripe token:', token);
            request
                .post("https://api.stripe.com/v1/charges")
                .query({ source: "tok_visa", amount: 100, currency: "usd", description: "Test charge"})
                .end((err, res) =>{
                    console.log(res);
                });
        });
    }

    render() {
        return (
            <form onSubmit={this.processPayment}>
                <CardElement style={{base: {fontSize: '1.1em'}}} />
                <button>Book</button>
            </form>
        );
    }
}

export default injectStripe(CheckoutForm);