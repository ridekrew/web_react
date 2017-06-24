import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Header from './components/header';

import App from './components/app';
import BookingForm from './components/bookingForm';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Header />
      <div className="col-md-5">
        <BookingForm />
      </div>
      <div className="col-md-7">
        <App />
      </div>
    </div>
  </Provider>
  , document.querySelector('.container-fluid'));
