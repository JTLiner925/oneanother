import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import DashSideNav from './DashSideNav';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <DashSideNav />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
