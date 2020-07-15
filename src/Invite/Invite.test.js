import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Invite from './Invite';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <Invite />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
