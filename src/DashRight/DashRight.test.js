import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import DashRight from './DashRight';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <DashRight groups={[]}/>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});