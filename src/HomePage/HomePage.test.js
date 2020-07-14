import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'mutationobserver-shim'
import HomePage from './HomePage';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <HomePage />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
