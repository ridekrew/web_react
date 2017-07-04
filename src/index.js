import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Header from './components/header';
import { StripeProvider } from 'react-stripe-elements';


import App from './components/app';
import BookingForm from './components/bookingForm';
import InfoPanel from './components/infoPanel';
import reducers from './reducers';

import Confirmation from './components/confirmation';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <StripeProvider apiKey="pk_live_t34DtKRcABYPKqN4gLZgYoxx">
      {/*<App />*/}
      <Confirmation />
    </StripeProvider>
  </Provider>
  , document.querySelector('.container-fluid'));
