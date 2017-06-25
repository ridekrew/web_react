import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Header from './components/header';

import App from './components/app';
import BookingForm from './components/bookingForm';
import InfoPanel from './components/infoPanel';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <App />
    </div>
  </Provider>
  , document.querySelector('.container-fluid'));
