import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import DashCenter from './DashCenter';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <DashCenter events={[]}/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});