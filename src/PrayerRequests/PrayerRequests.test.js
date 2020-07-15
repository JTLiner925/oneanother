import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import PrayerRequests from './PrayerRequests';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <PrayerRequests />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
