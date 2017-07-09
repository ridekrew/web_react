import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Header from './components/header';
import { StripeProvider } from 'react-stripe-elements';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/home';
import BookingForm from './components/bookingForm';
import InfoPanel from './components/infoPanel';
import reducers from './reducers';

import Confirmation from './components/confirmation';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <StripeProvider apiKey="pk_live_t34DtKRcABYPKqN4gLZgYoxx">
      <Router history={hashHistory}>
        <Route path="/" component={Header}>
          <IndexRoute component={Home} />
          <Route path="confirmation" component={Confirmation} />
          <Route path="learn" component={Confirmation} />
        </Route>
      </Router>
    </StripeProvider>
  </Provider>
  , document.querySelector('.container-fluid'));
