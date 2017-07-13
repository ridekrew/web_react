import { Route, IndexRoute } from 'react-router';
import Home from './components/home';
import BookingForm from './components/bookingForm';
import InfoPanel from './components/infoPanel';
import Confirmation from './components/confirmation';
import Header from './components/header';
import React from 'react';

export default (
  <Route path="/" component={Header}>
    <IndexRoute component={Home} />
    <Route path="confirmation" component={Confirmation} />
    <Route path="learn" component={Confirmation} />
  </Route>
);
