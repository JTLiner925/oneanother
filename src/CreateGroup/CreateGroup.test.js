import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import CreateGroup from './CreateGroup';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <CreateGroup />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});