import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Bible from './Bible';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <Bible />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});