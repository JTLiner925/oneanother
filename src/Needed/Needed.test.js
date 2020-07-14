import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Needed from './Needed';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <Needed item={['item']}/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
