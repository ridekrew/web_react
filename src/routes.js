import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import BookingForm from './components/bookingForm';
import React from 'react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BookingForm} />
  </Route>
);
