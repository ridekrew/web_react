import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Header from './components/header';
import { Router, browserHistory } from 'react-router';
import App from './components/app';
import BookingForm from './components/bookingForm';
import InfoPanel from './components/infoPanel';
import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
  , document.querySelector('.container-fluid'));
