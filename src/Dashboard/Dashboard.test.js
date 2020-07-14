import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './Dashboard';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <Dashboard />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});