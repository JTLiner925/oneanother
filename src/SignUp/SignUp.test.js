import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import SignUp from './SignUp';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <SignUp />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
